var main;
(function (main) {
    var App = (function () {
        function App() {
        }
        App.prototype.init = function () {
            console.log("MainApp.init");
        };
        return App;
    })();
    main.App = App;
})(main || (main = {}));

/// <reference path="./../definitions/jquery/jquery.d.ts" />
/// <reference path="App.ts" />
var App = main.App;
$(function () {
    var app = new App();
    app.init();
    window["app"] = app;
    //console.log("app initialized.")
});

//# sourceMappingURL=main.js.map