const inquirer = require("inquirer");
const Employee = require("./Employee.js");
// const teamMembers = require("../app.js");

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

async function createIntern() {
    const res = await inquirer.prompt(internQuestions);
    return new Intern(res.name, res.id, res.email, res.school);
}

const internQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is this intern's name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is this intern's id?"
    },
    {
        name: "email",
        type: "input",
        message: "What is this intern's email?"
    },
    {
        name: "school",
        type: "input",
        message: "What is this intern's school?"
    },
    
 ]

module.exports = {Intern, createIntern};