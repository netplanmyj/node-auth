const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database("./memo_data.db", (err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return
  }
  console.log('success');
});

router.get('/', function (req, res, next) {
  db.all(
    "select * from tasks;",
    (error, results) => {
      console.log(error);
      console.log(results);
      res.render('index', {
        title: 'ToDo App',
        todos: results,
      });
    }
  );
});

router.post('/', function (req, res, next) {
  const todo = req.body.add;
  db.run(
    'insert into tasks (user_id, content) values (?, ?)', 1, todo,
    (error, results) => {
      console.log(error);
      res.redirect('/');
    });
});

module.exports = router;