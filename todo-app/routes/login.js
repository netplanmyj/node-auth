const express = require('express');
const router = express.Router();
const passport = require("passport");

router.get('/', function (req, res, next) {
  const userId = req.session.userid;
  const isAuth = Boolean(userId);
  res.render("login", {
    title: "Login",
    isAuth: isAuth,
  });
});

router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}
));

module.exports = router;