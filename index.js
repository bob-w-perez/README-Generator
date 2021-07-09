
// $$$ gitignore and package-lock.json $$$ //

// LOOK INTO adding images, links to deployed page

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
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
    // {
    //     type: 'input',
    //     message: 'what is your LinkedIn URL?',
    //     name: 'linkedIn',
    //     validate: (input) => {
    //             if (!input.includes('linkedin')) {
    //                 return "Gotta be your LinkedIn dude....";
    //             } else {
    //                 return true;
    //             }    
    //     },
    //     filter: (input) => {
    //         if (input.startsWith('https://www.')) {
    //             return input;
    //         } else if (!input.includes('linkedin')) {
    //             return `https://www.`;
    //         } else {
    //             return `https://www.${input.slice(input.indexOf("linked"))}`;
    //         }

    //     },
    // },
    // {
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
    //     filter: (input) => {
    //         if (input.startsWith('https://')) {
    //             return input;
    //         } else if (!input.includes('github')) {
    //             return `https://`;
    //         } else {
    //             return `https://${input.slice(input.indexOf("github"))}`;
    //         }

    //     }
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        err ? console.error(err) : console.log('Success!');     
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('test.md', generateMarkdown(answers));
        });

    

}

// Function call to initialize app
init();
