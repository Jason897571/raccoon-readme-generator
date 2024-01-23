// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your readme?",
    name: "title"
},{
    type: "input",
    message: "Please enter the motivation of this project:",
    name: "motivation"
},{
    type: "input",
    message: "Please enter the reason why you build this project:",
    name: "reason"
},{
    type: "input",
    message: "Please enter what problem it solve:",
    name: "problem"
},{
    type: "input",
    message: "what do you learn from this project:",
    name: "learnt"
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
    message: "Please enter usage information for your project:(you should save it under ./asset/image)",
    name: "usage_iamge_name"
},{
    type: "input",
    message: "Please enter collaborators for your project:",
    name: "collaborators"
},{
    type: "input",
    message: "Please enter collaborators for your project:",
    name: "third_party_resources"
},{
    type: "input",
    message: "Please enter test instructions for your project:",
    name: "test_instructions"
},{
    type: "list",
    message: "Please choose your license for the project:" ,
    name: "license",
    choices:["MIT License","Apache License 2.0","GNU General Public License v3.0"]
},{
    type: "input",
    message: "Please enter your github username:",
    name: "github_username"
},{
    type: "input",
    message: "Please enter your email address:",
    name: "email_address"
}];


// Using inquirer to ask questions
inquirer
    .prompt(questions)
    .then(
        data =>{
            writeToFile("README-DEMO.md", generateMarkdown({...data}));
           
        }
    )

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success!'))
};
