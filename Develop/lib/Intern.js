const inquirer = require("inquirer");
const Employee = require("./Employee.js");
const teamMembers = require("../app.js")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school
    }
    getRole() {
        return "Intern";
    }
}

async function createManager() {
    const res = await inquirer.prompt(managerQuestions);
    return new Manager(res.name, res.id, res.email, res.officeNumber);
}

const managerQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is this manager's name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is this manager's id?"
    },
    {
        name: "email",
        type: "input",
        message: "What is this manager's email?"
    },
    {
        name: "officeNumber",
        type: "input",
        message: "What is this manager's office number?"
    },
    
 ]

module.exports = Intern;