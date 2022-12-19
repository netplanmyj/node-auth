const express = require('express');
const knex = require('../db/knex');
const bcrypt = require("bcrypt");
const router = express.Router();

router.get('/', function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
  res.render("login", {
    title: "Login",
    isAuth: isAuth,
  });
});

router.post('/', function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
  const username = req.body.username;
  const password = req.body.password;

  knex("users")
    .where({
      name: username,
    })
    .select("*")
    .then(async function (results) {
      const comparedPassword = await bcrypt.compare(password, results[0].password);
      if (results.length === 0) {
        res.render("login", {
          title: "Login",
          isAuth: isAuth,
          errorMessage: ["ユーザが見つかりません"],
        });
      } else if (await bcrypt.compare(password, results[0].password)) {
        req.session.userid = results[0].id;
        res.redirect('/');
      } else {
        res.render("login", {
          title: "Login",
          errorMessage: ["ユーザが見つかりません"],
          isAuth: isAuth,
        });
      }
    })
    .catch(function (err) {
      console.error(err);
      res.render("login", {
        title: "Login",
        isAuth: isAuth,
        errorMessage: [err.sqlMessage],
      });
    });
});

module.exports = router;