const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

inquirer 
    .prompt([
        {
        type: 'input',
        message: 'Select a project title.',
        name: 'projectTitle',

        },
        {

        type: 'input',
        message: 'Type a detailed description of your project.',
        name: 'projectDescr',

        },
        {

        type: 'input',
        message: 'Input installation instructions.',
        name: 'installInstruct',

        },
        {
        
        type: 'input',
        message: 'List usages.',
        name: 'usageInstruct',

        },
        {
        
        type: 'input',
        message: 'Instruct users how to contribute.',
        name: 'contribInstruct',

        },
        {
        
        type: 'input',
        message: 'Instruct users how to test.',
        name: 'testInstruct',

        },
        {

        type: 'list',
        message: 'Select a license to issue this project under:',
        choices: [
            'Apache 2.0',
            'MIT',
            'CC0',
        ],
        name: 'licenseChoice',

        },
        {
        type: 'input',
        message: 'What is your e-mail?',
        name: 'contactEmail',
        },
        {
        type: 'input',
        message: 'What is your github username?',
        name: 'contactGithub',
        },

    ])

    .then ((data) => {
        fs.writeFile('./Output/readme.md', generateMarkdown(data) , (err) => 
            err ? console.log("You missed some fields. Please start over.") : console.log("Readme created.")
        );
    });





   