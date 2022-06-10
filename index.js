const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connections');
// Create prompt with choices for employee tracking
function selectToDo () {

inquirer
.prompt(
    {
        type: 'list',
        name: 'selectToDo',
        message: 'What would you like to do?',
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            
        ],
    })
.then((answers) => {
    switch (answers.selectToDo) {
        case "View all departments":
            selectAllDepartments().then(([rows, fields]) => {
                console.table(rows);
                wantEnd();
            });
        break;
        case "View all roles":
            selectAllRoles().then(([rows, fields]) => {
                console.table(rows)
                wantEnd();
            });
        break;
        case "View all employees":
            selectAllEmployees().then(([rows, fields]) => {
                console.table(rows)
                wantEnd();
            });
        break;
        case "Add a department":
            addDepartment();

        break;
        case "Add a role":
            addRole();

        break;
        case "Add an employee":
            addEmployee();

        break;
        case "Updated an employee":
            updateEmployee();
        
        break;
        default:
    }
});
};


// Function runs when view all departments is selected
const selectAllDepartments = () => {
    return db.promise().execute("SELECT * FROM Departments;");
};


const selectAllRoles = () => {
    return db.promise().execute("SELECT * FROM Roles;");
};

const selectAllEmployees = () => {
    return db.promise().execute("SELECT * FROM Employees;");
};

const addDepartment = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "deptName",
            message: "What is the name of the department?",
        },
    ])
    .then((answers) => {
        const queryResults = db.query(
            `INSERT INTO Departments (department_name) VALUES (?);`,
            answers.deptName,
            (err, results, fields) => {
                if (err) {
                    console.log(`There was an error adding ${answers.deptName} to the database.`
                    );
            } else {
                console.log(`${answers.deptName} was added successfully to the database!`)
            }
            }
        );
       wantEnd();
        })
    };

// Adding role to DB
const addRole = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "job_title",
            message: "What is the role title?",
        },
        {
            type: "input",
            name: "salary",
            message: "What would be the salary for this position?" 
        },
        {
            type: "input",
            name: "department",
            message: "What department id will this role be under?" 
        }
    ])
    .then((answers) => {
        const queryResults = db.query(
            `INSERT INTO Roles (job_title, salary, department_id) VALUES (?, ?, ?);`,
            [answers.job_title, answers.salary, answers.department],
            (err, results, fields) => {
                if (err) {
                    console.log(`There was an error adding ${answers.job_title} to the database.`);
                } else {
                    console.log(`${answers.job_title} was added successfully to the database!`)
                }
            }
        );
     wantEnd()   
    })
}

// Adding employee to DB
const addEmployee = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the employee's role/position id?"
        },
        {
            type: "input",
            name: "manager_id",
            message: "What is the manager id for this new employee?"
        }
    ])
    .then((answers) => {
        const queryResults = db.query(
            `INSERT INTO Employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);`,
            [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
            (err, results, fields) => {
                if (err) {
                    console.log(`There was an error adding ${answers.last_name} to the database.`)
                } else {
                    console.log(`${answers.last_name} was added successfully to the database!`)
                }
            }
        )
        wantEnd()
    })
}





// Run whole function 
selectToDo()
    