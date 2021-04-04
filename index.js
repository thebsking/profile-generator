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
            console.log(engineer)
            newEmployee();
        })
}

function newIntern() {
    inquirer
        .prompt(questionsIntern)
        .then((data) => {
            const intern = new Intern(data.empName, data.empId, data.empEmail, data.school);
            console.log(intern)
            newEmployee();
        })
}

function newEmployee() {
    inquirer
        .prompt({ name: 'employeeType', type: 'list', message: 'Would you like to add another employee?', choices: ['Engineer', 'Intern', 'No'] })
        .then((data) => {
            console.log(data.employeeType)
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
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
    `
}

function addHtml(data) {

}

function init() {
    inquirer
        .prompt(questionsMgr)
        .then((data) => {
            const manager = new Manager(data.mgrName, data.mgrId, data.mgrEmail, data.mgrOffice);
            console.log(manager)
            newEmployee();
        })
}

init();