angular.module('templates.app', ['account/account.tpl.html', 'account/settings/account-settings.tpl.html', 'account/verification/account-verification.tpl.html', 'admin/accounts/admin-account.tpl.html', 'admin/accounts/admin-accounts.tpl.html', 'admin/admin-groups/admin-group.tpl.html', 'admin/admin-groups/admin-groups.tpl.html', 'admin/admin.tpl.html', 'admin/administrators/admin-administrator.tpl.html', 'admin/administrators/admin-administrators.tpl.html', 'admin/categories/admin-categories.tpl.html', 'admin/categories/admin-category.tpl.html', 'admin/statuses/admin-status.tpl.html', 'admin/statuses/admin-statuses.tpl.html', 'admin/users/admin-user.tpl.html', 'admin/users/admin-users.tpl.html', 'footer.tpl.html', 'header.tpl.html', 'login/forgot/login-forgot.tpl.html', 'login/login.tpl.html', 'login/reset/login-reset.tpl.html', 'main.tpl.html', 'signup/signup.tpl.html', 'unit/unit.tpl.html']);

angular.module("account/account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/account.tpl.html",
    "<div class=\"row\" id=\"account\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"page-header\"><h1>My Account</h1></div>\n" +
    "        <div class=\"row\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 special\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("account/settings/account-settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/settings/account-settings.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\"><h1>Account Settings</h1></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-9\">\n" +
    "        <form name=\"detailForm\">\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <alert ng-repeat=\"alert in alerts.detail\" type=\"{{alert.type}}\" close=\"closeAlert('detail', $index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.first)}\">\n" +
    "                <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"userDetail.first\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.first, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.middle)}\">\n" +
    "                <label class=\"control-label\" for=\"middle\">Middle Name:</label>\n" +
    "                <input type=\"text\" name=\"middle\" id=\"middle\" class=\"form-control\" ng-model=\"userDetail.middle\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.last)}\">\n" +
    "                <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"userDetail.last\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.last, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.company)}\">\n" +
    "                <label class=\"control-label\" for=\"company\">Company Name:</label>\n" +
    "                <input type=\"text\" name=\"company\" id=\"company\" class=\"form-control\" ng-model=\"userDetail.company\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.phone)}\">\n" +
    "                <label class=\"control-label\" for=\"phone\">Phone:</label>\n" +
    "                <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" ng-model=\"userDetail.phone\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.zip)}\">\n" +
    "                <label class=\"control-label\" for=\"zip\">Zip:</label>\n" +
    "                <input type=\"text\" name=\"zip\" id=\"zip\" class=\"form-control\" ng-model=\"userDetail.zip\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"submit(detailForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <form name=\"identityForm\">\n" +
    "            <legend>Identity</legend>\n" +
    "            <alert ng-repeat=\"alert in alerts.identity\" type=\"{{alert.type}}\" close=\"closeAlert('identity', $index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.username)}\">\n" +
    "                <label class=\"control-label\" for=\"username\">Username:</label>\n" +
    "                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Email:</label>\n" +
    "                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(identityForm)\" ng-click=\"submit(identityForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <form name=\"passwordForm\">\n" +
    "            <legend>Set Password</legend>\n" +
    "            <alert ng-repeat=\"alert in alerts.pass\" type=\"{{alert.type}}\" close=\"closeAlert('pass', $index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.password)}\">\n" +
    "                <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"pass.newPassword\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(passwordForm.password, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.confirm)}\">\n" +
    "                <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"pass.confirm\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(passwordForm.confirm, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-password\" ng-disabled=\"!canSave(passwordForm)\" ng-click=\"submit(passwordForm)\">Set Password</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-3\" ng-if=\"social\">\n" +
    "        <legend>Social Connections</legend>\n" +
    "        <alert ng-repeat=\"alert in socialAlerts\" type=\"{{alert.type}}\" close=\"closeSocialAlert($index)\">{{alert.msg}}</alert>\n" +
    "        <a ng-repeat-start=\"(provider, property) in social\" ng-if=\"property.connected\" ng-click=\"disconnect(provider)\" class=\"btn btn-block btn-danger\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> Disconnect {{property.text}}</a>\n" +
    "        <a ng-repeat-end target=\"_self\" href=\"{{property.connect}}\" ng-if=\"!property.connected\" class=\"btn btn-block btn-default\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> Connect {{property.text}}</a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("account/verification/account-verification.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/verification/account-verification.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"page-header\"><h1>Verification Required</h1></div>\n" +
    "        <div class=\"alert alert-warning\">Your account is nearly ready. Check your inbox for next steps.</div>\n" +
    "        <div id=\"verify\"></div>\n" +
    "        <form name=\"verificationForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"not-received\" ng-show=\"!formVisible\">\n" +
    "                <a class=\"btn btn-link btn-resend\" ng-click=\"showForm()\">I checked my email and spam folder, nothing yet.</a>\n" +
    "            </div>\n" +
    "            <div class=\"verify-form\" ng-show=\"formVisible\">\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(verificationForm.email)}\">\n" +
    "                    <label class=\"control-label\" for=\"email\">Your Email:</label>\n" +
    "                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"email\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(verificationForm.email, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(verificationForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(verificationForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary btn-verify\" ng-click=\"submit()\">Re-Send Verification</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 special\">\n" +
    "        <div class=\"page-header\"><h1>You're Almost Done</h1></div>\n" +
    "        <i class=\"fa fa-key super-awesome\"></i></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/accounts/admin-account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/accounts/admin-account.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a ng-href=\"/admin/accounts\">Accounts</a> / {{account.name.full}}</h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\" id=\"admin-accounts-detail\">\n" +
    "    <div class=\"col-sm-8\">\n" +
    "        <form name=\"contactForm\"><fieldset>\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <alert ng-repeat=\"alert in contactAlerts\" type=\"{{alert.type}}\" close=\"closeContactAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.first)}\">\n" +
    "                <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"account.name.first\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.first, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.middle)}\">\n" +
    "                <label class=\"control-label\" for=\"middle\">Middle Name:</label>\n" +
    "                <input type=\"text\" name=\"middle\" id=\"middle\" class=\"form-control\" ng-model=\"account.name.middle\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.last)}\">\n" +
    "                <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"account.name.last\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.last, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.company)}\">\n" +
    "                <label class=\"control-label\" for=\"company\">Company Name:</label>\n" +
    "                <input type=\"text\" name=\"company\" id=\"company\" class=\"form-control\" ng-model=\"account.company\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.phone)}\">\n" +
    "                <label class=\"control-label\" for=\"phone\">Phone:</label>\n" +
    "                <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" ng-model=\"account.phone\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.zip)}\">\n" +
    "                <label class=\"control-label\" for=\"zip\">Zip:</label>\n" +
    "                <input type=\"text\" name=\"zip\" id=\"zip\" class=\"form-control\" ng-model=\"account.zip\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(contactForm)\" ng-click=\"updateAccount()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"loginForm\"><fieldset>\n" +
    "            <legend>Login</legend>\n" +
    "            <alert ng-repeat=\"alert in loginAlerts\" type=\"{{alert.type}}\" close=\"closeLoginAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': loginForm.newUsername && hasError(loginForm.newUsername)}\">\n" +
    "                <label class=\"control-label\">Username:</label>\n" +
    "                <!-- show this div if there is an user linked to this account -->\n" +
    "                <div class=\"input-group\" ng-show=\"account.user && account.user.name\">\n" +
    "                    <input type=\"text\" name=\"username\" class=\"form-control\" ng-model=\"account.user.name\" disabled>\n" +
    "                    <div class=\"input-group-btn\" >\n" +
    "                        <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkUser()\">Unlink</button>\n" +
    "                        <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/users/{{account.user.id}}\">Open</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- show this div if there isn't an user linked to this account -->\n" +
    "                <div class=\"input-group\" ng-if=\"!(account.user && account.user.name)\">\n" +
    "                    <input type=\"text\" name=\"newUsername\" placeholder=\"enter a username\" class=\"form-control\" ng-model=\"account.newUsername\" required>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(loginForm.newUsername.$dirty && loginForm.newUsername.$valid)\" ng-click=\"linkUser()\">Link</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-if=\"!(account.user && account.user.name)\" ng-show=\"showError(loginForm.newUsername, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>&nbsp;<span class=\"text-muted\">You may also create orphaned document relationships too.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteAccount()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <fieldset>\n" +
    "            <div class=\"status-new\">\n" +
    "                <legend>Status</legend>\n" +
    "                <alert ng-repeat=\"alert in statusAlerts\" type=\"{{alert.type}}\" close=\"closeStatusAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <select name=\"statusSelect\" class=\"form-control\" ng-model=\"selectedStatus\" ng-options=\"status.name for status in statuses track by status._id\">\n" +
    "                        <option value=\"\">-- choose --</option>\n" +
    "                    </select>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" ng-click=\"changeStatus()\">Change</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"status-items\">\n" +
    "                <div class=\"status\" ng-repeat=\"status in account.statusLog | orderBy:'-_id'\">\n" +
    "                    <div class=\"pull-right badge author\">{{status.userCreated.name}} -&nbsp;<span class=\"timeago\" ng-bind=\"formatTime(status.userCreated.time)\"></span></div>\n" +
    "                    <div ng-bind=\"status.name\"></div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </fieldset>\n" +
    "        <fieldset>\n" +
    "            <div class=\"notes-new\">\n" +
    "                <legend>Notes</legend>\n" +
    "                <alert ng-repeat=\"alert in noteAlerts\" type=\"{{alert.type}}\" close=\"closeNoteAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <textarea rows=\"3\" name=\"note\" placeholder=\"enter notes\" class=\"form-control\" ng-model=\"newNote\"></textarea>\n" +
    "                <button class=\"btn btn-default btn-block\" ng-click=\"addNote()\">Add New Note</button>\n" +
    "            </div>\n" +
    "            <div class=\"notes-items\">\n" +
    "                <div class=\"note\" ng-repeat=\"note in account.notes | orderBy: '-_id'\">\n" +
    "                    <div class=\"force-wrap\" ng-bind=\"note.data\"></div>\n" +
    "                    <div class=\"pull-right badge author\">{{note.userCreated.name}} -&nbsp;<span class=\"timeago\" ng-bind=\"formatTime(note.userCreated.time)\"></span></div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"note text-muted\" ng-show=\"account.notes.length === 0\">no notes found</div>\n" +
    "            </div>\n" +
    "        </fieldset>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/accounts/admin-accounts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/accounts/admin-accounts.tpl.html",
    "<div class=\"row\" id=\"admin-accounts-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addAccountForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"fullname\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addAccountForm)\" ng-click=\"addAccount()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Accounts</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Search</label>\n" +
    "                    <input name=\"search\" type=\"text\" class=\"form-control\" ng-model=\"filters.search\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Status</label>\n" +
    "                    <select name=\"status\" class=\"form-control\" ng-model=\"filters.status\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"status._id as status.name for status in statuses\" ng-change=\"filtersUpdated()\">\n" +
    "                        <option value=\"\">-- any --</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                        <!--<option value=\"company\">company &#9650;</option>-->\n" +
    "                        <!--<option value=\"-company\">company &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th>name<span class=\"pull-right\">age</span></th>\n" +
    "                <th>phone</th>\n" +
    "                <th>status</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"account in accounts\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/accounts/{{account._id}}\">Edit</a></td>\n" +
    "                <td class=\"stretch\"><span class=\"badge badge-clear pull-right\" ng-bind=\"formatTime(account.userCreated.time, 'old')\"></span>{{account.name.full}}</td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"account.phone\"></td>\n" +
    "                <td class=\"nowrap\">\n" +
    "                    <div ng-bind=\"account.status.name\"></div>\n" +
    "                    <div ng-bind=\"formatTime(account.status.userCreated.time)\"></div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"accounts.length === 0\">\n" +
    "                <td colspan=\"4\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/admin-groups/admin-group.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin-groups/admin-group.tpl.html",
    "<div class=\"row\" id=\"admin-groups-detail\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a href=\"/admin/admin-groups\">Admin Groups</a> / {{group.name}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"detailForm\"><fieldset>\n" +
    "            <legend>Details</legend>\n" +
    "            <alert ng-repeat=\"alert in detailAlerts\" type=\"{{alert.type}}\" close=\"closeDetailAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.name)}\">\n" +
    "                <label class=\"control-label\" for=\"name\">Name:</label>\n" +
    "                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ng-model=\"group.name\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.name, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"update()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"permissionForm\"><fieldset>\n" +
    "            <legend>Permissions</legend>\n" +
    "            <alert ng-repeat=\"alert in permissionAlerts\" type=\"{{alert.type}}\" close=\"closePermissionAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">New Setting:</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"permission\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"newPermission\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-click=\"addPermission()\">Add</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>Settings:</label>\n" +
    "                <div class=\"permissions\">\n" +
    "                    <div class=\"input-group\" ng-repeat=\"permission in group.permissions\">\n" +
    "                        <input disabled ng-model=\"permission.name\" class=\"form-control\" disabled>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: permission.permit}\" ng-click=\"togglePermission($index)\">Allow</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: !permission.permit}\" ng-click=\"togglePermission($index)\">Deny</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deletePermission($index)\"><i class=\"fa fa-trash-o fa-inverse\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"badge\" ng-show=\"group.permissions.length === 0\">no permissions defined</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveSettings()\">Save Settings</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>&nbsp;<span class=\"text-muted\">You may also create orphaned document relationships too.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteAdminGroup()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/admin-groups/admin-groups.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin-groups/admin-groups.tpl.html",
    "<div class=\"row\" id=\"admin-groups-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addGroupForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"groupname\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addGroupForm)\" ng-click=\"addGroup()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Admin Groups</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Name Search</label>\n" +
    "                    <input name=\"search\" type=\"text\" class=\"form-control\" ng-model=\"filters.name\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th class=\"stretch\">name</th>\n" +
    "                <th>id</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"group in groups\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/admin-groups/{{group._id}}\">Edit</a></td>\n" +
    "                <td ng-bind=\"group.name\"></td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"group._id\"></td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"groups.length === 0\">\n" +
    "                <td colspan=\"3\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<div class=\"row\" id=\"admin\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"page-header\"><h1>Admin Area</h1></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value\" ng-bind=\"user.users\"></div>\n" +
    "                    <div class=\"stat-label\">Users</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value\" ng-bind=\"user.accounts\"></div>\n" +
    "                    <div class=\"stat-label\">Accounts</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value\" ng-bind=\"user.admins\"></div>\n" +
    "                    <div class=\"stat-label\">Admins</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value\" ng-bind=\"user.groups\"></div>\n" +
    "                    <div class=\"stat-label\">Groups</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value\" ng-bind=\"pivoted.categories\"></div>\n" +
    "                    <div class=\"stat-label\">Categories</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value\" ng-bind=\"pivoted.statuses\"></div>\n" +
    "                    <div class=\"stat-label\">Statuses</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 special\">\n" +
    "        <div class=\"page-header\"><h1>Super Dashboard</h1></div>\n" +
    "        <i class=\"fa fa-gears super-awesome\"></i></div>\n" +
    "</div>");
}]);

angular.module("admin/administrators/admin-administrator.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/administrators/admin-administrator.tpl.html",
    "<div class=\"row\" id=\"admin-administrators-detail\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a href=\"/admin/administrators\">Administrators</a> / {{administrator.name.full}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"contactForm\"><fieldset>\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <alert ng-repeat=\"alert in contactAlerts\" type=\"{{alert.type}}\" close=\"closeContactAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.first)}\">\n" +
    "                <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"administrator.name.first\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.first, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.middle)}\">\n" +
    "                <label class=\"control-label\" for=\"middle\">Middle Name:</label>\n" +
    "                <input type=\"text\" name=\"middle\" id=\"middle\" class=\"form-control\" ng-model=\"administrator.name.middle\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.last)}\">\n" +
    "                <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"administrator.name.last\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.last, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(contactForm)\" ng-click=\"updateAdmin()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"loginForm\"><fieldset>\n" +
    "            <legend>Login</legend>\n" +
    "            <alert ng-repeat=\"alert in loginAlerts\" type=\"{{alert.type}}\" close=\"closeLoginAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': loginForm.newUsername && hasError(loginForm.newUsername)}\">\n" +
    "                <label class=\"control-label\">Username:</label>\n" +
    "                <!-- show this div if there is an user linked to this administrator -->\n" +
    "                <div class=\"input-group\" ng-show=\"administrator.user && administrator.user.name\">\n" +
    "                    <input type=\"text\" name=\"username\" class=\"form-control\" ng-model=\"administrator.user.name\" disabled>\n" +
    "                    <div class=\"input-group-btn\" >\n" +
    "                        <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkUser()\">Unlink</button>\n" +
    "                        <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/users/{{administrator.user.id}}\">Open</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- show this div if there isn't an user linked to this administrator -->\n" +
    "                <div class=\"input-group\" ng-if=\"!(administrator.user && administrator.user.name)\">\n" +
    "                    <input type=\"text\" name=\"newUsername\" placeholder=\"enter a username\" class=\"form-control\" ng-model=\"administrator.newUsername\" required>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(loginForm.newUsername.$dirty && loginForm.newUsername.$valid)\" ng-click=\"linkUser()\">Link</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-if=\"!(administrator.user && administrator.user.name)\" ng-show=\"showError(loginForm.newUsername, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"groupForm\"><fieldset>\n" +
    "            <legend>Groups</legend>\n" +
    "            <alert ng-repeat=\"alert in groupAlerts\" type=\"{{alert.type}}\" close=\"closeGroupAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">Add Membership:</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <select name=\"newMembership\" class=\"form-control\" ng-options=\"group as group.name for group in groups\" ng-model=\"selectedNewGroup\"></select>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-click=\"addGroup()\">Add</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">Memberships:</label>\n" +
    "                <div class=\"groups\">\n" +
    "                    <div class=\"input-group\" ng-repeat=\"group in administrator.groups\">\n" +
    "                        <input disabled class=\"form-control\" ng-model=\"group.name\">\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteGroup($index)\"><i class=\"fa fa-trash-o fa-inverse\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"badge\" ng-show=\"administrator.groups.length === 0\">no memberships defined</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveGroups()\">Save Groups</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"permissionForm\"><fieldset>\n" +
    "            <legend>Permissions</legend>\n" +
    "            <alert ng-repeat=\"alert in permissionAlerts\" type=\"{{alert.type}}\" close=\"closePermissionAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">New Setting:</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"permission\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"newPermission\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-click=\"addPermission()\">Add</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>Settings:</label>\n" +
    "                <div class=\"permissions\">\n" +
    "                    <div class=\"input-group\" ng-repeat=\"permission in administrator.permissions\">\n" +
    "                        <input disabled ng-model=\"permission.name\" class=\"form-control\" disabled>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: permission.permit}\" ng-click=\"togglePermission($index)\">Allow</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: !permission.permit}\" ng-click=\"togglePermission($index)\">Deny</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deletePermission($index)\"><i class=\"fa fa-trash-o fa-inverse\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"badge\" ng-show=\"administrator.permissions.length === 0\">no permissions defined</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveSettings()\">Save Settings</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>&nbsp;<span class=\"text-muted\">You may also create orphaned document relationships too.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteAdministrator()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("admin/administrators/admin-administrators.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/administrators/admin-administrators.tpl.html",
    "<div class=\"row\" id=\"admin-administrators-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addAdminForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"fullname\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addAdminForm)\" ng-click=\"addAdmin()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Administrators</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Name Search</label>\n" +
    "                    <input name=\"search\" type=\"text\" class=\"form-control\" ng-model=\"filters.search\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th class=\"stretch\">name</th>\n" +
    "                <th>id</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"administrator in administrators\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/administrators/{{administrator._id}}\">Edit</a></td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"administrator.name.full\"></td>\n" +
    "                <td ng-bind=\"administrator._id\"></td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"administrators.length === 0\">\n" +
    "                <td colspan=\"3\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/categories/admin-categories.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/categories/admin-categories.tpl.html",
    "<div class=\"row\" id=\"admin-categories-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addCategoryForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"pivot\" type=\"text\" placeholder=\"pivot\" class=\"form-control\" ng-model=\"add.pivot\" required>\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"name\" class=\"form-control\" ng-model=\"add.name\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addCategoryForm)\" ng-click=\"addCategory()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Categories</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Pivot Search</label>\n" +
    "                    <input name=\"pivot\" type=\"text\" class=\"form-control\" ng-model=\"filters.pivot\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Name Search</label>\n" +
    "                    <input name=\"name\" type=\"text\" class=\"form-control\" ng-model=\"filters.name\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th>pivot</th>\n" +
    "                <th class=\"stretch\">name</th>\n" +
    "                <th>id</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"category in categories\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/categories/{{category._id}}\">Edit</a></td>\n" +
    "                <td ng-bind=\"category.pivot\"></td>\n" +
    "                <td ng-bind=\"category.name\"></td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"category._id\"></td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"categories.length === 0\">\n" +
    "                <td colspan=\"4\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/categories/admin-category.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/categories/admin-category.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a href=\"/admin/categories\">Categories</a> / {{category.name}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"detailForm\"><fieldset>\n" +
    "            <legend>Details</legend>\n" +
    "            <alert ng-repeat=\"alert in detailAlerts\" type=\"{{alert.type}}\" close=\"closeDetailAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.pivot)}\">\n" +
    "                <label class=\"control-label\" for=\"pivot\">pivot:</label>\n" +
    "                <input type=\"text\" name=\"pivot\" id=\"pivot\" class=\"form-control\" ng-model=\"category.pivot\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.pivot, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.name)}\">\n" +
    "                <label class=\"control-label\" for=\"name\">Name:</label>\n" +
    "                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ng-model=\"category.name\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.name, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"update()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>&nbsp;<span class=\"text-muted\">You may also create orphaned document relationships too.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteCategory()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/statuses/admin-status.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/statuses/admin-status.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a href=\"/admin/statuses\">Statuses</a> / {{status.name}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"detailForm\"><fieldset>\n" +
    "            <legend>Details</legend>\n" +
    "            <alert ng-repeat=\"alert in detailAlerts\" type=\"{{alert.type}}\" close=\"closeDetailAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.pivot)}\">\n" +
    "                <label class=\"control-label\" for=\"pivot\">pivot:</label>\n" +
    "                <input type=\"text\" name=\"pivot\" id=\"pivot\" class=\"form-control\" ng-model=\"status.pivot\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.pivot, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.name)}\">\n" +
    "                <label class=\"control-label\" for=\"name\">Name:</label>\n" +
    "                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ng-model=\"status.name\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.name, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"update()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>&nbsp;<span class=\"text-muted\">You may also create orphaned document relationships too.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteStatus()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/statuses/admin-statuses.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/statuses/admin-statuses.tpl.html",
    "<div class=\"row\" id=\"admin-statuses-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addStatusForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"pivot\" type=\"text\" placeholder=\"pivot\" class=\"form-control\" ng-model=\"add.pivot\" required>\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"name\" class=\"form-control\" ng-model=\"add.name\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addStatusForm)\" ng-click=\"addStatus()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Statuses</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Pivot Search</label>\n" +
    "                    <input name=\"pivot\" type=\"text\" class=\"form-control\" ng-model=\"filters.pivot\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Name Search</label>\n" +
    "                    <input name=\"name\" type=\"text\" class=\"form-control\" ng-model=\"filters.name\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th>pivot</th>\n" +
    "                <th class=\"stretch\">name</th>\n" +
    "                <th>id</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"status in statuses\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/statuses/{{status._id}}\">Edit</a></td>\n" +
    "                <td ng-bind=\"status.pivot\"></td>\n" +
    "                <td ng-bind=\"status.name\"></td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"status._id\"></td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"statuses.length === 0\">\n" +
    "                <td colspan=\"4\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/users/admin-user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/users/admin-user.tpl.html",
    "<div class=\"row\" id=\"admin-users-detail\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a ng-href=\"/admin/users\">Users</a> / {{user.username}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"identityForm\"><fieldset>\n" +
    "            <legend>Identity</legend>\n" +
    "            <alert ng-repeat=\"alert in identityAlerts\" type=\"{{alert.type}}\" close=\"closeIdentityAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.isActive)}\">\n" +
    "                <label class=\"control-label\" for=\"isActive\">Is Active:</label>\n" +
    "                <select name=\"isActive\" id=\"isActive\" class=\"form-control\" ng-model=\"user.isActive\" ng-options=\"active for active in isActives\" server-error></select>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.isActive, 'server')\">{{errfor.isActive}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.username)}\">\n" +
    "                <label class=\"control-label\" for=\"username\">Username:</label>\n" +
    "                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Email:</label>\n" +
    "                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(identityForm)\" ng-click=\"updateIdentity()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"roleForm\"><fieldset>\n" +
    "            <legend>Roles</legend>\n" +
    "            <alert ng-repeat=\"alert in roleAlerts\" type=\"{{alert.type}}\" close=\"closeRoleAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': roleForm.newAdminId && hasError(roleForm.newAdminId)}\">\n" +
    "                <label class=\"control-label\">Admin:</label>\n" +
    "                <!-- show this div if there is an admin linked to this user -->\n" +
    "                <div class=\"input-group\" ng-show=\"user.roles && user.roles.admin\">\n" +
    "                    <input type=\"text\" name=\"adminId\" class=\"form-control\" ng-model=\"user.roles.admin.name.full\" disabled>\n" +
    "                    <div class=\"input-group-btn\" >\n" +
    "                        <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkAdmin()\">Unlink</button>\n" +
    "                        <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/administrators/{{user.roles.admin._id}}\">Open</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- show this div if there isn't an admin linked to this user -->\n" +
    "                <div class=\"input-group\" ng-if=\"!(user.roles && user.roles.admin)\">\n" +
    "                    <input type=\"text\" name=\"newAdminId\" placeholder=\"enter admin id\" class=\"form-control\" ng-model=\"role.newAdminId\" required>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(roleForm.newAdminId.$dirty && roleForm.newAdminId.$valid)\" ng-click=\"linkAdmin()\">Link</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-if=\"!(user.roles && user.roles.admin)\" ng-show=\"showError(roleForm.newAdminId, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': roleForm.newAccountId && hasError(roleForm.newAccountId)}\">\n" +
    "                <label class=\"control-label\">Account:</label>\n" +
    "                <!-- show this div if there is an account linked to this user -->\n" +
    "                <div class=\"input-group\" ng-show=\"user.roles && user.roles.account\">\n" +
    "                    <input type=\"text\" name=\"accountId\" class=\"form-control\" ng-model=\"user.roles.account.name.full\" disabled>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkAccount()\">Unlink</button>\n" +
    "                        <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/accounts/{{user.roles.account._id}}\">Open</a>\n" +
    "                    </div>\n" +
    "                    </div>\n" +
    "                <!-- show this div if there isn't an account linked to this user -->\n" +
    "                <div class=\"input-group\" ng-if=\"!(user.roles && user.roles.account)\">\n" +
    "                    <input type=\"text\" name=\"newAccountId\" placeholder=\"enter account id\" class=\"form-control\" ng-model=\"role.newAccountId\" required>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(roleForm.newAccountId.$dirty && roleForm.newAccountId.$valid)\" ng-click=\"linkAccount()\">Link</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-if=\"!(user.roles && user.roles.account)\" ng-show=\"showError(roleForm.newAccountId, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"passwordForm\"><fieldset>\n" +
    "            <legend>Set Password</legend>\n" +
    "            <alert ng-repeat=\"alert in passwordAlerts\" type=\"{{alert.type}}\" close=\"closePasswordAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.password)}\">\n" +
    "                <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"pass.newPassword\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(passwordForm.password, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.confirm)}\">\n" +
    "                <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"pass.confirm\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(passwordForm.confirm, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(passwordForm)\" ng-click=\"setPassword()\">Set Password</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>&nbsp;<span class=\"text-muted\">You may also create orphaned document relationships too.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteUser()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("admin/users/admin-users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/users/admin-users.tpl.html",
    "<div class=\"row\" id=\"admin-users-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addUserForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"username\" type=\"text\" placeholder=\"enter a username\" class=\"form-control\" ng-model=\"username\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addUserForm)\" ng-click=\"addUser()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Users</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Username Search</label>\n" +
    "                    <input name=\"username\" type=\"text\" class=\"form-control\" ng-model=\"filters.username\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Can Play Role</label>\n" +
    "                    <select name=\"roles\" class=\"form-control\" ng-model=\"filters.roles\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"role.value as role.label for role in roles\"  ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"\">any</option>-->\n" +
    "                        <!--<option value=\"admin\">admin</option>-->\n" +
    "                        <!--<option value=\"account\">account</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <label>Is Active</label>\n" +
    "                    <select name=\"isActive\" class=\"form-control\" ng-model=\"filters.isActive\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"isActive.value as isActive.label for isActive in isActives\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"\">either</option>-->\n" +
    "                        <!--<option value=\"yes\">yes</option>-->\n" +
    "                        <!--<option value=\"no\">no</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"username\">username &#9650;</option>-->\n" +
    "                        <!--<option value=\"-username\">username &#9660;</option>-->\n" +
    "                        <!--<option value=\"email\">email &#9650;</option>-->\n" +
    "                        <!--<option value=\"-email\">email &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th></th>\n" +
    "                    <th>username</th>\n" +
    "                    <th class=\"stretch\">email</th>\n" +
    "                    <th>active</th>\n" +
    "                    <th>id</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"user in users\">\n" +
    "                    <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/users/{{user._id}}\">Edit</a></td>\n" +
    "                    <td ng-bind=\"user.username\"></td>\n" +
    "                    <td ng-bind=\"user.email\"></td>\n" +
    "                    <td ng-bind=\"user.isActive\"></td>\n" +
    "                    <td ng-bind=\"user._id\"></td>\n" +
    "                </tr>\n" +
    "                <tr ng-show=\"users.length === 0\">\n" +
    "                    <td colspan=\"5\">no documents matched</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer.tpl.html",
    "<div class=\"footer\" ng-controller=\"FooterCtrl\">\n" +
    "    <div class=\"container\">\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div ng-controller=\"HeaderCtrl\">\n" +
    "   <!-- Navigation -->\n" +
    "    <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"index.html\">SIMS Dashboard</a>\n" +
    "        </div>\n" +
    "        <!-- /.navbar-header -->\n" +
    "\n" +
    "        <ul ng-if=\"!isAuthenticated()\" class=\"nav navbar-top-links navbar-right\">\n" +
    "            <li class=\"dropdown\">\n" +
    "                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"/login\">\n" +
    "                    Sign In\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "        <ul ng-if=\"isAuthenticated()\" class=\"nav navbar-top-links navbar-right\">\n" +
    "            <li class=\"dropdown\">\n" +
    "                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" ng-click=\"logout()\" href=\"/\">\n" +
    "                    Sign Out\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul ng-if=\"isAuthenticated()\" class=\"nav navbar-top-links navbar-right\">\n" +
    "            <li class=\"dropdown\">\n" +
    "                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"/account\">\n" +
    "                    Account\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <!-- /.navbar-top-links -->\n" +
    "\n" +
    "        <div class=\"navbar-default sidebar\" role=\"navigation\">\n" +
    "            <div class=\"sidebar-nav navbar-collapse\">\n" +
    "                <ul class=\"nav\" id=\"side-menu\">\n" +
    "                    <!--<li class=\"sidebar-search\">\n" +
    "                        <div class=\"input-group custom-search-form\">\n" +
    "                            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n" +
    "                            <span class=\"input-group-btn\">\n" +
    "                            <button class=\"btn btn-default\" type=\"button\">\n" +
    "                                <i class=\"fa fa-search\"></i>\n" +
    "                            </button>\n" +
    "                        </span>\n" +
    "                        </div>\n" +
    "                        --><!-- /input-group -->\n" +
    "                    <!--</li>-->\n" +
    "                    <li ng-if=\"isAuthenticated()\">\n" +
    "                        <a class=\"active\" href=\"/\"><i class=\"fa fa-home fa-fw\"></i> Home</a>\n" +
    "                    </li>\n" +
    "                    <li ng-if=\"isAuthenticated()\">\n" +
    "                        <a href=\"/units\"><i class=\"fa fa-hospital-o fa-fw\"></i> Units Status</a>\n" +
    "                    </li>\n" +
    "                    \n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <!-- /.sidebar-collapse -->\n" +
    "        </div>\n" +
    "        <!-- /.navbar-static-side -->\n" +
    "    </nav>\n" +
    "</div>\n" +
    "\n" +
    "<!--\n" +
    "<div class=\"navbar navbar-inverse navbar-fixed-top\" ng-if=\"isAdmin()\" ng-controller=\"AdminHeaderCtrl\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <a href=\"/admin/\" class=\"navbar-brand-admin\">\n" +
    "                <img src=\"/img/logo-symbol-64x64.png\" class=\"navbar-logo\">\n" +
    "                <span class=\"navbar-brand-label\">Angular Drywall</span>\n" +
    "            </a>\n" +
    "            <button class=\"navbar-toggle btn navbar-btn\" ng-click=\"toggleAdminMenu()\">\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"navbar-collapse collapse\" collapse=\"adminMenuCollapsed\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li class=\"dropdown\" dropdown is-open=\"status.isopen\">\n" +
    "                    <a href=\"#\" class=\"dropdown-toggle navbar-dropdown-admin\" dropdown-toggle>System&nbsp;<span class=\"caret\"></span></a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li class=\"dropdown-header\">Pivoted Settings</li>\n" +
    "                        <li><a href=\"/admin/statuses\" ng-click=\"closeAdminMenu()\">Statuses</a></li>\n" +
    "                        <li><a href=\"/admin/categories\" ng-click=\"closeAdminMenu()\">Categories</a></li>\n" +
    "                        <li class=\"divider\"></li>\n" +
    "                        <li class=\"dropdown-header\">User Admin</li>\n" +
    "                        <li><a href=\"/admin/users\" ng-click=\"closeAdminMenu()\">Users</a></li>\n" +
    "                        <li><a href=\"/admin/accounts\" ng-click=\"closeAdminMenu()\">Accounts</a></li>\n" +
    "                        <li><a href=\"/admin/administrators\" ng-click=\"closeAdminMenu()\">Administrators</a></li>\n" +
    "                        <li><a href=\"/admin/admin-groups\" ng-click=\"closeAdminMenu()\">Admin Groups</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <form name=\"form\" class=\"navbar-form navbar-right\">\n" +
    "                <div class=\"dropdown\" dropdown is-open=\"resultIsOpen\">\n" +
    "                    <input name=\"search\" type=\"text\" placeholder=\"search\" class=\"form-control\" ng-model=\"query\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"update()\">\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li class=\"dropdown-header\" ng-show=\"showDropdownHeader('noDocsMatched')\">no docs matched</li>\n" +
    "                        <li class=\"dropdown-header\" ng-show=\"showDropdownHeader('Users')\">Users</li>\n" +
    "                        <li ng-repeat=\"user in result.users\">\n" +
    "                            <a ng-bind=\"user.username\" ng-href=\"/admin/users/{{user._id}}\" ng-click=\"closeAdminMenu()\"></a>\n" +
    "                        </li>\n" +
    "                        <li class=\"dropdown-header\" ng-show=\"showDropdownHeader('Accounts')\">Accounts</li>\n" +
    "                        <li ng-repeat=\"account in result.accounts\">\n" +
    "                            <a ng-bind=\"account.name.full\" ng-href=\"/admin/accounts/{{account._id}}\" ng-click=\"closeAdminMenu()\"></a>\n" +
    "                        </li>\n" +
    "                        <li class=\"dropdown-header\" ng-show=\"showDropdownHeader('Administrators')\">Administrators</li>\n" +
    "                        <li ng-repeat=\"admin in result.administrators\">\n" +
    "                            <a ng-bind=\"admin.name.full\" ng-href=\"/admin/administrators/{{admin._id}}\" ng-click=\"closeAdminMenu()\"></a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "-->\n" +
    "");
}]);

angular.module("login/forgot/login-forgot.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/forgot/login-forgot.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"page-header\"><h1>Forgot Your Password?</h1></div>\n" +
    "        <form name=\"loginForgotForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(loginForgotForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Enter Your Email:</label>\n" +
    "                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForgotForm.email, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForgotForm.email, 'email')\">Please enter a valid email</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-forgot\" ng-disabled=\"!canSave(loginForgotForm)\" ng-click=\"submit()\">Send Reset</button>\n" +
    "                &nbsp;<a href=\"/login\" class=\"btn btn-link\">Back to Login</a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"page-header\"><h1>Sign In</h1></div>\n" +
    "        <form name=\"loginForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(loginForm.username)}\">\n" +
    "                <label class=\"control-label\" for=\"username\">Username or Email:</label>\n" +
    "                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.username, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(loginForm.password)}\">\n" +
    "                <label class=\"control-label\" for=\"password\">Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"user.password\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.password, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.password, 'server')\">{{errfor.password}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-login\" ng-disabled=\"!canSave(loginForm)\" ng-click=\"submit()\">Sign In</button>\n" +
    "                <!--<button type=\"button\" class=\"btn btn-primary btn-login\">Sign In</button>-->\n" +
    "                &nbsp;<a href=\"/login/forgot\" class=\"btn btn-link\">Forgot your password?</a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <div ng-if=\"social\">\n" +
    "            <hr>\n" +
    "            <p>Or sign in using...</p>\n" +
    "            <div class=\"btn-group btn-group-justified\">\n" +
    "                <a ng-repeat=\"(provider, property) in social\" ng-href=\"{{property.login}}\" target=\"_self\" class=\"btn btn-info\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> {{property.text}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("login/reset/login-reset.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/reset/login-reset.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"page-header\"><h1>Reset Your Password</h1></div>\n" +
    "        <form name=\"resetForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(resetForm.password)}\" ng-show=\"(id && email && !success)\">\n" +
    "                <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"user.password\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(resetForm.password, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(resetForm.confirm)}\" ng-show=\"(id && email && !success)\">\n" +
    "                <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"user.confirm\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(resetForm.confirm, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-reset\" ng-show=\"(id && email && !success)\" ng-disabled=\"!canSave(resetForm)\" ng-click=\"submit()\">Set Password</button>\n" +
    "                &nbsp;<a href=\"/login\" class=\"btn btn-link\">Back to Login</a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main.tpl.html",
    "<div class=\"row\">\n" +
    "                <div class=\"col-lg-12\">\n" +
    "                    <h1 class=\"page-header\">Home</h1>\n" +
    "                </div>\n" +
    "                <!-- /.col-lg-12 -->\n" +
    "            </div>\n" +
    "            <!-- /.row -->");
}]);

angular.module("signup/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signup/signup.tpl.html",
    "<div class=\"row\" id=\"signup\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"page-header\"><h1>Sign Up</h1></div>\n" +
    "        <form name=\"signupForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(signupForm.username)}\">\n" +
    "                <label class=\"control-label\" for=\"username\">Pick a Username:</label>\n" +
    "                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.username, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(signupForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Enter Your Email:</label>\n" +
    "                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.email, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(signupForm.password)}\">\n" +
    "                <label class=\"control-label\" for=\"password\">Create a Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"user.password\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.password, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.password, 'server')\">{{errfor.password}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-signup\" ng-disabled=\"!canSave(signupForm)\" ng-click=\"submit()\">Create My Account</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <div ng-if=\"social\">\n" +
    "            <hr>\n" +
    "            <p>Or sign in using...</p>\n" +
    "            <div class=\"btn-group btn-group-justified\">\n" +
    "                <a ng-repeat=\"(provider, property) in social\" ng-href=\"{{property.login}}\" target=\"_self\" class=\"btn btn-info\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> {{property.text}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 marketing\">\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("unit/unit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("unit/unit.tpl.html",
    "<div class=\"row\">\n" +
    "                <div class=\"col-lg-12\">\n" +
    "                    <h1 class=\"page-header\">Units Status</h1>\n" +
    "                </div>\n" +
    "                <!-- /.col-lg-12 -->\n" +
    "            </div>\n" +
    "            <!-- /.row -->\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-3 col-md-6\" ng-repeat=\"unit in unitData\">\n" +
    "                    <div class=\"panel {{ unit.statusPanel }}\">\n" +
    "                        <div class=\"panel-heading\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-xs-1\">\n" +
    "                                    <i class=\"fa {{ unit.statusSymbol }} fa\"></i>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-10 text-left\">\n" +
    "                                    <div ng-bind=\"unit.name\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"panel-footer\">\n" +
    "                            <span class=\"pull-left\"><span ng-bind=\"unit.indicatorsMet\"></span> of <span ng-bind=\"unit.indicatorsNumber\"></span> indicators met</span>\n" +
    "                            <div class=\"clearfix\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- /.row -->\n" +
    "            <div ng-repeat=\"unit in unitData\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-lg-12\">\n" +
    "                        <h2 ng-bind=\"unit.name\"></h2>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-lg-9 col-md-9\">\n" +
    "                        <div class=\"panel panel-default\">\n" +
    "                            <div class=\"panel-heading\">\n" +
    "                                Indicators Status\n" +
    "                            </div>\n" +
    "                            <!-- /.panel-heading -->\n" +
    "                            <div class=\"panel-body\">\n" +
    "                                <div class=\"table-responsive\">\n" +
    "                                    <table class=\"table\">\n" +
    "                                        <thead>\n" +
    "                                            <tr>\n" +
    "                                                <th>#</th>\n" +
    "                                                <th>Indicator</th>\n" +
    "                                                <th>Status</th>\n" +
    "                                                <th>Status as of</th>\n" +
    "                                            </tr>\n" +
    "                                        </thead>\n" +
    "                                        <tbody>\n" +
    "                                            <tr ng-repeat=\"indicator in unit.indicators\">\n" +
    "                                                <td ng-bind=\"indicator.id\"></td>\n" +
    "                                                <td ng-bind=\"indicator.name\"></td>\n" +
    "                                                <td ng-bind-html=\"indicator.value\"></td>\n" +
    "                                                <td ng-bind=\"indicator.date\"></td>\n" +
    "                                            </tr>\n" +
    "                                        </tbody>\n" +
    "                                    </table>\n" +
    "                                </div>\n" +
    "                                <!-- /.table-responsive -->\n" +
    "                            </div>\n" +
    "                            <!-- /.panel-body -->\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- /.row -->\n" +
    "            \n" +
    "\n" +
    "        <!-- Custom Theme JavaScript -->\n" +
    "    <!-- Morris Charts JavaScript -->\n" +
    "    <script src=\"vendor/raphael.min.js\"></script>\n" +
    "    <script src=\"vendor/morris.min.js\"></script>\n" +
    "    <script src=\"vendor/sb-admin-2.js\"></script>\n" +
    "");
}]);
