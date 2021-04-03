const Employee = require('./employee');

class Engineer extends Employee{
    constructor(git) {
        super(name, id, email) 
        this.github = git
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }
}