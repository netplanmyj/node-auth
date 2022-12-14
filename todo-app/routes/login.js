const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render("login", {
    title: "Login",
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
        res.render("login", {
          title: "Login",
          errorMessage: ["ユーザが見つかりません"],
        });
      } else {
        req.session.userid = results[0].id;
        res.redirect('/');
      }
    })
    .catch(function (err) {
      console.error(err);
      res.render("login", {
        title: "Login",
        errorMessage: [err.sqlMessage],
      });
    });
});

module.exports = router;