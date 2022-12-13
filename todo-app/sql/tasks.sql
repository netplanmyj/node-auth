create table tasks (
    id integer AUTO_INCREMENT,
    user_id int not null, 
    content varchar(255) not null, 
    PRIMARY KEY (id)
);