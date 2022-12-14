create table tasks (
    id integer primary key AUTOINCREMENT,
    user_id int not null, 
    content varchar(255) not null
);