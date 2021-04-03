const Employee = require('./employee');

class Engineer extends Employee{
    constructor(git) {
        super(name, id, email) 
        this.github = git
    }

    getGithub() {

    }
    getRole() {
        return 'Engineer'
    }
}