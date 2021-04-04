const fs = require('fs');
const inquirer = require('inquirer');

//import classes
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')

//inquirer questions
const questionsMgr =[
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
    ...[questionsAll],
    {
        type: 'input',
        name: 'github',
        message: `Please enter the Employee's Github username`
    }
]
const questionsIntern = [
    ...[questionsAll],
    {
        name: 'school',
        type: 'input',
        message: `Please enter the employee's school`
    }
]

function newEngineer() {
    inquirer
        .prompt(questionsEng)
        .then((data)=> {
            const manager = new Engineer(data.empName, data.empId, data.empEmail, data.github);
            console.log(manager)
            newEmployee(); 
        })
}

function newIntern() {
    inquirer
        .prompt(questionsIntern)
        .then((data)=> {
            const manager = new Intern(data.empName, data.empId, data.empEmail, data.github);
            console.log(manager)
            newEmployee(); 
        })
}

function newEmployee() {
    inquirer
        .prompt({name:'employeeType', type:'list', message:'Would you like to add another employee?',choices:['Engineer', 'Intern','No']})
        .then((data)=>{
            switch (data){
                case 'Engineer':
                    newEngineer();
                    break;
                case 'Intern':
                    newIntern();
                    break;
                case 'No':
                    return;

            }
        })
};

function init() {
    inquirer
        .prompt(questionsMgr)
        .then((data)=> {
            const manager = new Manager(data.mgrName, data.mgrId, data.mgrEmail, data.mgrOffice);
            console.log(manager)
            newEmployee(); 
        })
}

init();