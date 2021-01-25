const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')




// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your github Username",
        name: "gitUser"
    },
    {
        type: "input",
        message: "What is your project name?",
        name: "projName"
    },
    {
        type: "list",
        message: "What type of license are you using for this project?",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GPL"]
    }    //one question per readme info
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