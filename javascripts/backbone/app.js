var app = app || {};

$(function() {
  app.router = new app.Router();
  Backbone.history.start();
});
