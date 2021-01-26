// variables to make the Node modules work
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')




// array of questions for the user
const questions = [
    {
        type: "input",
        message: "What is your github Username",
        name: "gitUser",
    },
    {
        type: "input",
        message: "What is your project name?",
        name: "projName",
    },
    {
        type: "list",
        message: "What type of license are you using for this project?",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GPL"]
    },
    {
        type: "input",
        message: "What is the url for your page?",
        name: "projLink",
    },
    {
        type: "input",
        message: "What is the local relative path to your screenshot?",
        name: "screenLink",
    },
    {
        type: "input",
        message: "Please type a short description of your project",
        name: "description",
    },

    

    

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,fileName), data)
}

// function to initialize program
function init() {
 inquirer.prompt(questions).then(function(answers) {
    writeToFile("README.md", generateMarkdown(answers))
 })
}

// function call to initialize program
init();
