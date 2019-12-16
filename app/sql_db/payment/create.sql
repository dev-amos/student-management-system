DROP DATABASE IF EXISTS payment;
CREATE DATABASE payment;
USE payment;

CREATE TABLE fees (
    student_type VARCHAR(50) PRIMARY KEY,
    semester_fee int
);

CREATE TABLE payment_records (
    student_id INT,
    annual_year INT,
    semester INT,
    paid BOOLEAN,
    PRIMARY KEY (student_id, annual_year, semester)
);
