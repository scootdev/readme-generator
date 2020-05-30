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
        type: "input",
        name: "install",
        message: "What are the install instructions?",
    },
    {
        type: "input",
        name: "usage",
        message: "How would someone use the application?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the licensing for this application",
        choices: [
            "ISC",
            "Apache License 2.0",
            "MIT",
            "GNU GPLv3",
            "Other"
        ]
    },
    {
        type: "input",
        name: "license",
        message: "What other license do you want to use?",
        when: (answers) => answers.license === "Other"
    },
    {
        type: "input",
        name: "contrib",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "tests",
        message: "How can someone test the application?"
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
