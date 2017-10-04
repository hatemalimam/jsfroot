define(function(require) {
    var FoxTokenModel = require('./FoxTokenModel');
    var FoxMapModel = require('./FoxMapModel');
    var FoxMapView = require('./FoxMapView');
    var $ = require('jquery');


    sendAuthentication = function(xhr) {
        var user = "locafox";
        var pass = "LocaF#xes!";
        var token = user.concat(":", pass);
        xhr.setRequestHeader('Authorization', ("Basic ".concat(btoa(token))));
    }
    var modelToken = new FoxTokenModel();
    var modelMap;
    modelToken.fetch({type: 'POST', beforeSend: sendAuthentication, success: function(obj) {
            var finalToken = obj.attributes['token'];

            modelMap = new FoxMapModel(finalToken);
            modelMap.fetch({type: 'POST', beforeSend: sendAuthentication, success: function(obj) {

                }});
        }});




    $(document).ready(function() {
        var fox = new FoxMapView({
            el: $('.fox').first(),
            model: modelMap
        });


    });



});