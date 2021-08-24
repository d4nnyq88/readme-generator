const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) =>
  `# ${answers.name}
  ## License:
  ${answers.license}  
  ## Table of Contents:
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)  
  ## Description:
  ${answers.description}
  &nbsp;  
  ## Installation:
  ${answers.installation}
  &nbsp;  
  ## Usage:
  ${answers.usage}
  &nbsp;  
  ## Contributing:
  ${answers.contribution}
  &nbsp;  
  ## Tests:
  ${answers.test}
  &nbsp;  
   ## Questions:
  If you have any questions you can reach me at ${answers.email} and visit my [GitHub](https://www.github.com/${answers.github}).
  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your project name.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter your project description.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Enter test instructions.',
      choices: ['BSD [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)','MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)','GPL [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
  ])
  .then((answers) => {
    const readMeContent = generateREADME(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadME.md!')
    );
  });