'use-strict';

// dependencies
var config = require('./config'),
    express = require('express'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    http = require('http'),
    massive = require('massive'),
    path = require('path'),
    passport = require('passport'),
    favicon = require('serve-favicon'),
    helmet = require('helmet'),
    strftime = require('strftime'),
    csrf = require('csurf'),
    logger = require('morgan');

// create express app
var app = express();

// store config
app.config = config;

// setup massive postgres
app.db = massive.connectSync({connectionString : config.database.uri});

// setup the web server
app.server = http.createServer(app);

//config data models
app.models = [];
require('./models')(app);

// settings
app.disable('x-powered-by');
app.set('port', config.port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//middleware
app.use(require('morgan')('dev'));
app.use(require('compression')());
app.use(require('serve-static')(path.join(__dirname, 'client/dist')));
app.use(require('method-override')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(config.cryptoKey));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.cryptoKey
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(csrf({ cookie: { signed: true } }));
helmet(app);

//response locals
app.use(function(req, res, next) {
  res.cookie('_csrfToken', req.csrfToken());
  res.locals.user = {};
  res.locals.user.defaultReturnUrl = req.user && app.models.User.defaultReturnUrl();
  res.locals.user.username = req.user && req.user.username;
  next();
});

//global locals
app.locals.projectName = app.config.projectName;
app.locals.copyrightYear = new Date().getFullYear();
app.locals.copyrightName = app.config.companyName;
app.locals.cacheBreaker = 'br34k-01';

//custom (friendly) error handler
app.use(require('./service/http').http500);

//setup passport
require('./passport')(app, passport);

//setup routes
require('./routes')(app, passport);

// setup utilities
app.utility = {};
app.utility.workflow = require('./utils/workflow');


//listen up
app.server.listen(app.config.port, function(){
  //and... we're live
  console.log('Server is running on port ' + config.port);
});
