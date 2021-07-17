// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    
    {
        type:'input',
        name:"title",
        message: "What is the title of your project?",
    },
    
    
    {
        type:'input',
        name:"github",
        message: "What is your github username?",
    },
    {
        type:'input',
        name:"email",
        message: "What is your email address?",
    },
    
];


// TODO: Create a function to write README file
 
function writeToFile(filename, data){
    console.log (filename)
    console.log (data)
    return fs.writeFileSync(filename, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
    console.log (answers);
    const markdown = generateMarkdown(answers);
    console.log (markdown);
  writeToFile("readme.md",markdown  )
})}

// Function call to initialize app
init();
