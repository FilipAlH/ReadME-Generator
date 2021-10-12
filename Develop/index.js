// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "What was your motivation behind the creation of this project?", "Why did you build this project?", "What problem does this project solve?", "What did you learn in doing this project?", "What are the steps required to install your project?", "How would you use your project? Provide examples.", "Who were your collaborators if any and what were their GitHub URL's in the format 'name: url,' ?", "What third party assets did you use if any?", "What permissions and restrictions do you give other developers with your project?", "What testing did you do on your project?", "What is your GitHub username?", "What is your email address?", "What is the best way for people to reach out to you with questions?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => 
    err ? console.log(err) : console.log('Your file has been created!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: `title`,
            },

            {
                type: 'input',
                message: questions[1],
                name: `description1`,
            },

            {
                type: 'input',
                message: questions[2],
                name: `description2`,
            },

            {
                type: 'input',
                message: questions[3],
                name: `description3`,
            },

            {
                type: 'input',
                message: questions[4],
                name: `description4`,
            },

            {
                type: 'input',
                message: questions[5],
                name: `installation`,
            },

            {
                type: 'input',
                message: questions[6],
                name: `usage`,
            },

            {
                type: 'input',
                message: questions[7],
                name: `collaborators1`,
            },

            {
                type: 'input',
                message: questions[8],
                name: `collaborators2`,
            },

            {
                type: 'input',
                message: questions[9],
                name: `license`,
            },

            {
                type: 'list',
                message: 'What licence does your project use?',
                name: `licenseList`,
                choices: [
                    "Apache", 
                    "GNU", 
                    "MIT", 
                    'BSD', 
                    "Boost",
                    "CC",
                    "Eclipse",
                    "Mozilla",
                    "Unlicense"
                ]
            },

            {
                type: 'input',
                message: questions[10],
                name: `testing`,
            },

            {
                type: 'input',
                message: questions[11],
                name: `questions1`,
            },

            {
                type: 'input',
                message: questions[12],
                name: `questions2`,
            },

            {
                type: 'input',
                message: questions[13],
                name: `questions3`,
            },
        ])
        .then((response) => 
        writeToFile(response.title, 
`
# ${response.title}\n
${generateMarkdown(response.licenseList)}\n
## Description\n
- ${response.description1}
- ${response.description2}
- ${response.description3}
- ${response.description4}
\n
## Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions?](#questions)
\n
## Installation\n
${response.installation}

## Usage\n
${response.usage}
\n
## Credits\n
Collaborators: ${response.collaborators1}
Libraries: ${response.collaborators2}
\n
## License\n
This project is protected under the ${response.licenseList} license
\n
## Tests\n
${response.testing}
\n
## Questions\n
* My GitHub: (https://github.com/${response.questions1})
* My Email (${response.questions2})\n
${response.questions3}
`
            )
        )
}
// Function call to initialize app
init();
