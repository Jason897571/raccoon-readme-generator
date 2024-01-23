// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your readme?",
    name: "title"
},{
    type: "input",
    message: "Please enter your project description:",
    name: "description"
},{
    type: "input",
    message: "Please enter installation instructions for your project:",
    name: "installation_instructions"
},{
    type: "input",
    message: "Please enter usage information for your project:",
    name: "usage_information"
},{
    type: "input",
    message: "Please enter contribution guidelines for your project:",
    name: "contribution_guidelines"
},{
    type: "input",
    message: "Please enter test instructions for your project:",
    name: "test_instructions"
},{
    type: "list",
    message: "Please choose your license for the project:" ,
    name: "license",
    choices:["MIT License","Apache License 2.0","Boost Software License 1.0"]
},{
    type: "input",
    message: "Please enter your github username:",
    name: "github_username"
},{
    type: "input",
    message: "Please enter your email address:",
    name: "email_address"
}];
inquirer
    .prompt(questions)
    .then(
        data =>{
            console.log(data)
           
        }
    )

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
