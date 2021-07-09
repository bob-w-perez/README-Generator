
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

    default:
      return '';
  }
}


function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';

    case 'APACHE 2.0':
      return '[APACHE 2.0 License](https://opensource.org/licenses/Apache-2.0)';

    case 'GPL 3.0':
      return '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';

    case 'BSD 3':
      return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';

    default:
      return '';
  }
}


function renderLicenseSection(license) {
  return `## License

This project is licensed under the ${renderLicenseLink(license)}.`
}


function generateMarkdown(data) {
  return `# ${data.projectName}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation

To install required dependencies, run the following command(s):

\`\`\`
${data.installCMD}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributions

${data.contributing}

## Tests

To run tests, run the following command(s):

\`\`\`
${data.testCMD}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [github/${data.userName}](https://github.com/${data.userName}).

`;
}

module.exports = generateMarkdown;
