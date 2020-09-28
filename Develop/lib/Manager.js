const inquirer = require("inquirer");
const Employee = require("./Employee.js");
const teamMembers = require("../app.js")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;