//app.js

const authApi = require('./utils/auth.js');
const constant = require('./utils/const.js');
const api = require('./utils/api.js');
const request = require('./utils/request.js');

App({
    onLaunch: function (option) {
        // console.log('[onLaunch]------');
        constant.loadStorage();
        constant.loadSystemInfo();
    },
 
    request:request,
    authApi: authApi,
    constant: constant, 
    api:api,
});