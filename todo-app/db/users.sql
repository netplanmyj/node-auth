-- SQLite
create table users (
  id integer primary key AUTOINCREMENT,
  name varchar(255) unique,
  password varchar(255)
);