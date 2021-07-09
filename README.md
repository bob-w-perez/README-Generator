# README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  



## Description

Allows the user to quickly create a README.md file for their projectthrough a series of command line prompts that gather information about the project, rednder that information in markdown form and then save the created markdown to a new file titled README.md in the 'new-README' directory.  



## Table of Contents

- [Installation](#installation)

- [Features](#features)

- [Usage](#usage)

- [Credits](#credits)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

- [License](#license)  



## Installation

To install required dependencies, run the following command(s):

```
npm ci
```  

## Features  
- includes an option to have a 'Features' section in the created README. If the user responds "yes" to the prompt asking if they would like to include one, a second prompt is displayed which opens the user's default text editor to allow them to add information about their project's features with more control over formatting than the other section prompts

- saves the generated README.md file to a subdirectory (new-README) to avoid potential confusion with the project's own README.md file 

## Usage

To generate a new README the user should open their preferred CLI (command line interface), navigate to the project directory, and then run the following command: node index.js  This will initate a series of prompts in the CLI and the user responses to these prompts will generate the new README.md which will appear in the 'new-README' subdirectory  

## Credits

This was a solo project for the GA-Tech Bootcamp

## Contributing

If you would like to contribute to this project you may fork a copy and submit a pull request, or you may contact me to be added as a contributor to the main project.  



## Tests

To run tests, run the following command(s):

```
npm test
```  



## Questions

If you have any questions about the repo, open an issue or contact me directly at bob.w.perez@gmail.com. You can find more of my work at [github/bob-w-perez](https://github.com/bob-w-perez).  


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  


