/// <reference path="./../definitions/jquery/jquery.d.ts" />
/// <reference path="App.ts" />

import App = main.App

$(function() {
  var app = new App();
  app.init();
  window["app"] = app;
  //console.log("app initialized.")
});

