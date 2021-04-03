const Employee = require('./employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, num){
        super(name, id, email)
        this.officeNumber = num;
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager