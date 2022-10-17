DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS roles:


CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL,
 );

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role_name VARCHAR(30) NOT NULL,
  salary DECIMAL,
  -- reference department ID
  department_id INT,
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  -- reference role ID
  role_id INT,
  -- foreign key and reference
  manager_id INT
  );