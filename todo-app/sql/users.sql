-- SQLite
create table users (
  id int unsigned auto_increment not null,
  name varchar(255) unique,
  password varchar(255),
  PRIMARY KEY (id)
);