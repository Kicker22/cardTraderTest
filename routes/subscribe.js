const express = require("express");
const router = express.Router();
const db = require("../dist/config/database");
const Email = require("../dist/models/email");

router.get("/", (req, res) =>
  Email.findAll()
    .then((emails) => {
      console.log(emails);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

// Submit Email
router.post("/add", (req, res) => {
  let { subscriber_email } = req.body;
  let errors = [];

  if (!subscriber_email) {
    errors.push({ text: "Please include email" });
  }

  // check for errors
  if (errors.length > 0) {
    console.log(errors);
  } else {
    // insert into table
    Email.create({
      subscriber_email,
    })
      .then((email) => res.redirect("/"))
      .catch((err) => console.log(err));
  }
});

module.exports = router;
