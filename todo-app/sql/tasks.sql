create table tasks (
    id int unsigned auto_increment not null,
    user_id int not null, 
    content varchar(255) not null, 
    PRIMARY KEY (id)
);