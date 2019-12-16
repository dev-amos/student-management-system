DROP DATABASE IF EXISTS student;
CREATE DATABASE student;
USE student;

CREATE TABLE student (
    student_id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    student_type VARCHAR(50)
);
