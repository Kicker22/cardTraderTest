const express = require('express');
const path = require('path')
const router = express.Router();


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../dist/html/index.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../dist/html/aboutUs.html"));
  });
  app.get("/Search", function(req, res) {
    res.sendFile(path.join(__dirname, "../dist/html/cardSearch.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../dist/html/index.html"));
  });
};
