const fs = require('fs');
const inquirer = require('inquirer');

//import classes
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')

//inquirer questions
const questionsMgr = [
    {
        type: 'input',
        message: `Please enter the Manager's name`,
        name: 'mgrName'
    },
    {
        type: 'input',
        message: `Please enter the Manager's employee ID`,
        name: 'mgrId'
    },
    {
        type: 'input',
        message: `Please enter the Manager's email address`,
        name: 'mgrEmail'
    },
    {
        type: 'input',
        message: `Please enter the Manager's office number`,
        name: 'mgrOffice'
    },
]
const questionsAll = [
    {
        type: 'input',
        message: `Please enter the Employee's name`,
        name: 'empName'
    },
    {
        type: 'input',
        message: `Please enter the Employee's ID`,
        name: 'empId'
    },
    {
        type: 'input',
        message: `Please enter the Employee's email address`,
        name: 'empEmail'
    },
]
const questionsEng = [
    ...questionsAll,
    {
        type: 'input',
        name: 'github',
        message: `Please enter the Employee's Github username`
    }
]
const questionsIntern = [
    ...questionsAll,
    {
        name: 'school',
        type: 'input',
        message: `Please enter the employee's school`
    }
]

function newEngineer() {
    inquirer
        .prompt(questionsEng)
        .then((data) => {
            const engineer = new Engineer(data.empName, data.empId, data.empEmail, data.github);
            
            engHtml(engineer)
            newEmployee();
        })
}

function newIntern() {
    inquirer
        .prompt(questionsIntern)
        .then((data) => {
            const intern = new Intern(data.empName, data.empId, data.empEmail, data.school);
            
            internHtml(intern)
            newEmployee();
        })
}

function newEmployee() {
    inquirer
        .prompt({ name: 'employeeType', type: 'list', message: 'Would you like to add another employee?', choices: ['Engineer', 'Intern', 'No'] })
        .then((data) => {
            
            switch (data.employeeType) {
                case 'Engineer':
                    newEngineer();
                    break;
                case 'Intern':
                    newIntern();
                    break;
                default:
                    return;

            }
        })
};

function newHtml(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    <body>
        <div class="jumbotron">
            <h1>My Team</h1>
        </div>
        <section id="team-cards">
            <div class="card">
                <div class="card-header>
                    <h2>${data.mgrName}</h2>
                    <h3>Manager</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.mgrId}</li>
                        <li>Email: <a href="mailto:${data.mgrEmail}">${data.mgrEmail}</a></li>
                        <li>Office number: ${data.mgrOffice}</li>
                    </ul>
                </div>
            </div>
        </section>
    </body>
    </html>
    `
}

function engHtml(data) {
    return `
    <div class="card">
                <div class="card-header>
                    <h2>${data.empName}</h2>
                    <h3>Engineer</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.empId}</li>
                        <li>Email: <a href="mailto:${data.empEmail}">${data.empEmail}</a></li>
                        <li>Github: <a href="https://github.com/${data.github}>${data.github}</a></li>
                    </ul>
                </div>
            </div>
    `
}

function internHtml(data) {
    return `
    <div class="card">
                <div class="card-header>
                    <h2>${data.empName}</h2>
                    <h3>Intern</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.empId}</li>
                        <li>Email: <a href="mailto:${data.empEmail}">${data.empEmail}</a></li>
                        <li>School: ${data.school}</a></li>
                    </ul>
                </div>
            </div>
    `
}

function init() {
    inquirer
        .prompt(questionsMgr)
        .then((data) => {
            const manager = new Manager(data.mgrName, data.mgrId, data.mgrEmail, data.mgrOffice);
            
            newHtml(manager);
            newEmployee();
        })
}

init();