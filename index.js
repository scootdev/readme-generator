const fs = require("fs");
const inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown.js");


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "desc",
        message: "Write a short description of the application..."
    },
    {
        type: "confirm",
        name: "installNeeded",
        message: "Do we need installation instructions?"
    },
    {
        type: "input",
        name: "install",
        message: "What are the install instructions?",
        when: (answers) => answers.installNeeded === true
    },
    {
        type: "input",
        name: "usage",
        message: "How would someone use the application?"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {

        if (err) {
            throw err;
        }
        console.log("ReadMe Saved!");
    });
};

function init() {
    inquirer.prompt(questions).then((data => {
    writeToFile("README.md", generateMarkdown(data));
    }));
};

init();
