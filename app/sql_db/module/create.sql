DROP DATABASE IF EXISTS module;
CREATE DATABASE module;
USE module;

CREATE TABLE module(
    module_id VARCHAR(5) PRIMARY KEY,
    module_name VARCHAR(50)
);

CREATE TABLE student_module (
    module_id VARCHAR(5),
    student_id INT,
    section_id VARCHAR(3),
    PRIMARY KEY (student_id, module_id)
);

CREATE TABLE attendance (
    module_id VARCHAR(5),
    week_id INT,
    student_id INT,
    present BOOLEAN,
    PRIMARY KEY (module_id, week_id, student_id)
);

CREATE TABLE results (
    module_id VARCHAR(5),
    student_id INT,
    result VARCHAR(2),
    PRIMARY KEY (module_id, student_id)
);