
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
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (input) => {
            if (!input.includes('@')) {
                return 'Please enter a valid email address...';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectName'
    },
    {
        type: 'list',
        message: "What kind of license should you project have?",
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none']
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description'
    },
    {
        type: 'confirm',
        message: "Would you like to add a 'Features' section to your README?",
        name: 'featureConfirm'
    },
    {
        type: 'editor',
        message: "Use the editor to describe your project\'s features (close the editor when finished and click 'Save'):",
        name: 'features',
        when(answers) {
            return answers.featureConfirm;
        }
    },
    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Who deserves to be credited for this project's development?",
        name: 'credits'
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
        message: "What does the user need to know about contributing to the repo?",
        name: 'contributing'
    }

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        err ? console.error(err) : console.log('Generating README.md...');     
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('./new-README/README.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
