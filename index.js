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

    ])

    .then ((data) => {
        console.log(data)
        fs.writeFile('readme.md', generateMarkdown(data) , (err) => 
            err ? console.log("you done goofed") : console.log("you done won")
        );
    });





   