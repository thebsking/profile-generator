const Employee = require('./employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(num){
        this.officeNumber = num;
    }
    getRole() {
        return 'Manager'
    }
}
