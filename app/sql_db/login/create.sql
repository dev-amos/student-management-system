DROP DATABASE IF EXISTS login;
CREATE DATABASE login;
USE login;

CREATE TABLE login(
    student_id INT,
    email VARCHAR(50),
    password_hash TEXT,
    PRIMARY KEY (student_id, email)
);
