const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const MaxLengthInputPrompt = require('./node_modules/inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const makeShape = require('./lib/shapes');

function getUserInput() {
    inquirer
    .prompt([
    {
        type: 'maxlength-input',
        message: 'Please choose up to 3 characters for your logo.',
        name: 'logo-letters',
        maxLength: 3
    },
    {
        type: 'input',
        message: 'What color text do you want? (accepts color keyword or hexadecimal number--ex: #bfcdb4)',
        name: 'letters-color'
    },
    {
        type: 'list',
        message: 'What shape is the logo going to be?',
        name: 'shape',
        choices: ["circle", "triangle", "square"]
    },
    {
        type: 'input', 
        message: 'What is the color of the shape? (accepts color keyword or hexadecimal number--ex: #bfcdb4)',
        name: 'shape-color'
    },
    {
        type: 'input', 
        message: 'Choose a file name for your saved logo.',
        default: 'logo.svg',
        name: 'file-name',
    }]) 
    .then((answers)=> {
        
        fs.writeFile(answers['file-name'], makeShape(answers), (err)=> {
            err ? console.log(err) : console.log(`Generated ${answers['file-name']}`)
        })
    });
}
getUserInput();