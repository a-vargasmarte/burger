DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers
(

    -- TABLE CODE TO GO HERE --
    id int
    auto_increment not null,
  burger_name varchar
    (250) not null,
  devoured boolean default false,
  primary key
    (id)
);