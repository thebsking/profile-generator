const inquirer = require('inquirer');

const questions = [
    {
        name: 'name',
        message: `Please enter the manager's name:`,
        type: 'input',
    },
    {
        name: 'employeeId',
        message: `What is the manager's employee ID?`,
        type: 'input',
    },
    {
        name: 'email',
        message: '',
        type: '',
    }
]