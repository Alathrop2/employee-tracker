DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db

CREATE TABLE departments (
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
 
);

CREATE TABLE roles (
  id INT NOT NULL,
  role_name VARCHAR(30) NOT NULL,
  salary DECIMAL,
  -- department_id foreign key,
);

CREATE TABLE employees (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  -- role_id foreign key, 
);