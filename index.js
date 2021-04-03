const fs = require('fs');
const inquirer = require('inquirer');

//import classes
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')

//inquirer questions
const questionsStart =[
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
    {
        type: 'confirm',
        message: 'would you like to enter another team member?',
        name: 'playAgain'
    },
    
]

function init() {
    
}