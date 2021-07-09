
// $$$ gitignore and package-lock.json $$$ //

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName'
    },
    // add validations here
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description'
    },
    {
        type: 'list',
        message: "What kind of license should you project have?",
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none']
    },
    {
        type: 'input',
        message: "What command should be run to install dependencies?",
        name: 'installCMD',
        default: 'npm ci' 
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testCMD',
        default: 'npm test' 
    },
    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'contributing'
    },
    
    //     type: 'input',
    //     message: 'What is your GitHub URL?',
    //     name: 'github',
    //     validate: (input) => {
    //         if (!input.includes('github')) {
    //             return "Gotta be your GitHub dude....";
    //         } else {
    //             return true;
    //         }    
    //     },

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        err ? console.error(err) : console.log('Success!');     
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // %%%%  CHANGE FILE NAME
            writeToFile('test.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
