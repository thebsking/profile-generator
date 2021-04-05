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
                    fs.appendFile('./dist/index.html', `
                            </section>
                        </body>
                    </html>`, (err)=> {if(err) throw err});

            }
        })
};

function newHtml(data) {
    fs.writeFile('./dist/index.html', `
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
                <div class="card-header">
                    <h2>${data.name}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                      </svg><h3>Manager</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.id}</li>
                        <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                        <li>Office number: ${data.officeNumber}</li>
                    </ul>
                </div>
            </div>
        
    `, (err)=> {if (err) throw err})
}

function engHtml(data) {
    const htmlToAdd = `
    <div class="card">
                <div class="card-header">
                    <h2>${data.name}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
</svg><h3>Engineer</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.id}</li>
                        <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                        <li>Github: <a href="https://github.com/${data.github}"> ${data.github} </a></li>
                    </ul>
                </div>
            </div>
    `;
   fs.appendFile('./dist/index.html', htmlToAdd, (err)=> {if(err) throw err})
}

function internHtml(data) {
    const htmlToAdd =  `
    <div class="card">
                <div class="card-header">
                    <h2>${data.name}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg><h3>Intern</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${data.id}</li>
                        <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
                        <li>School: ${data.school}</a></li>
                    </ul>
                </div>
            </div>
    `;
    fs.appendFile('./dist/index.html', htmlToAdd, (err)=>{if(err) throw err})
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