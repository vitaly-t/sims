'use-strict';

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.set('X-Auth-Required', 'true');
  req.session.returnUrl = req.originalUrl;
  res.redirect('/login/');
}

function ensureAdmin(req, res, next) {
  if (req.user.canPlayRoleOf('admin')) {
    return next();
  }
  res.redirect('/');
}

function ensureAccount(req, res, next) {
  if (req.user.canPlayRoleOf('account')) {
    if (req.app.config.requireAccountVerification) {
      if (req.user.roles.account.isVerified !== 'yes' && !/^\/account\/verification\//.test(req.url)) {
        return res.redirect('/account/verification/');
      }
    }
    return next();
  }
  res.redirect('/');
}


exports = module.exports = function(app, passport) {
  // front end
  app.get('/', require('./views/index').init);

  // organizations
  app.post('/api/v1/organizations', require('./views/organization/index').create)
  app.get('/api/v1/organizations', require('./views/organization/index').read)
  app.put('/api/v1/organizations/:id/', require('./views/organization/index').update)
  app.delete('/api/v1/organizations/:id/', require('./views/organization/index').delete)

  // units
  app.get('/api/v1/units', require('./views/units/index').read)
  app.get('/api/v1/units/:id/indicators', require('./views/units/index').readIndicators)

  // indicators
  app.get('/api/v1/indicators/', require('./views/indicators/index').read)
  app.get('/api/v1/indicators/:indicator_id/values/last', require('./views/indicators/index').readLastValue)
  app.get('/api/v1/indicators/pull', require('./views/indicators/index').pullRecentData)


  // sign up

  app.get('/signup/', require('./views/signup/index').init);
  app.post('/signup/', require('./views/signup/index').signup);

  // route not found
  app.all('*', require('./views/http/index').http404);
};