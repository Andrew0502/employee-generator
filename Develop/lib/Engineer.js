const inquirer = require("inquirer");
const Employee = require("./Employee.js");
// const teamMembers = require("../app.js");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    };
    getGithub(){
        return this.github;
    };
    getRole() {
        return "Engineer";
    };
};

// const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");

async function createEngineer() {
    const res = await inquirer.prompt(engineerQuestions);
    return new Engineer(res.name, res.id, res.email, res.github);
}

const engineerQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is this engineer's name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is this engineer's id?"
    },
    {
        name: "email",
        type: "input",
        message: "What is this engineer's email?"
    },
    {
        name: "github",
        type: "input",
        message: "What is this engineer's github account?"
    },
    
 ]
module.exports = {Engineer, createEngineer};
// module.exports = Engineer