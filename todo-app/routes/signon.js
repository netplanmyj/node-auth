const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render("signon", {
    title: "Sign on",
  });
});

router.post('/', function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  knex("users")
    .where({
      name: username,
      password: password,
    })
    .select("*")
    .then((results) => {
      if (results.length === 0) {
        res.render("signon", {
          title: "Sign on",
          errorMessage: ["ユーザが見つかりません"],
        });
      } else {
        req.session.userid = results[0].id;
        res.redirect('/');
      }
    })
    .catch(function (err) {
      console.error(err);
      res.render("signon", {
        title: "Sign on",
        errorMessage: [err.sqlMessage],
      });
    });
});

module.exports = router;