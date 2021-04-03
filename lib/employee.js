class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return Employee.name;
    }
    getEmail() {
        return Employee.email;
    }
    getId() {
        return Employee.id;
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;