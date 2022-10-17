const inquirer = require('inquirer');
const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sql123!',
  database: 'company_db',
});

const startPrompt = [
  {
    type: 'list',
    message: 'Choose a department',
    name: 'tables',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
    ],
  },
];

function init() {
  inquirer.prompt(startPrompt).then((answers) => {
    console.log(answers);
    if (answers['View all departments'] == 'yes') {
    }
    db.query('SELECT * FROM ', function (err, results) {
      console.log(results);
    });
  });
}
init();
// GIVEN a command-line application that accepts user input
// WHEN I start the application
//  todo THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// todo THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// todo THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// todo THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// todo THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// todo THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// todo THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// todo THEN I am prompted to select an employee to update and their new role and this information is updated in the database
