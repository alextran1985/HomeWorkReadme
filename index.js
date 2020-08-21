const inquirer = require("inquirer")
const fs = require("fs");
// const waitUntil = require("waitUntil");
// const writeFile = waitUntil.promisefy("fs.writeFile");



const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    },
    {
        type: "checkbox",
        message: "What badge you like to include?",
        name: "badge",
        choices: [
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL"
        ]
    },
    {
        type: "input",
        message: "A bief summary of your description.",
        name: "description",
    }, 
      
    {
        type: "input",
        name: "installation",
        message: "What are the installation for this application?"
    },
    {
        type: "input",
        name: "usage",
        message: "How would you like this application to be use?"
    },
    {
        type: "input",
        name: "license",
        message: "What lecense did you use?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the name of your contributor if any?"
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any test instuction for this application?"
    },
    {
        type: "input",
        name: "git profile",
        message: "What is your github name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
];
inquirer.prompt(questions).then(function (data) {

    // Save data to a readme file
    // stringfy ?? JSON??
    //var myVar = "Hello how are you?" 
    // template litiral:`<li>${myVar}</li`
    console.log(
        `# ${data.title}

Project Title goe here`)

function generateMarkdown(data){
    return `
    # Title
    ${data.title};
    # Badge
    ${data.badge};
    # Description
    ${data.description};
    # Table of Contents
    ${data.tableOfContents};
    # Installation
    ${data.installation};
    # Usage
    ${data.usage};
    # Contributor
    ${data.contributor};
    # Tests
    ${data.tests}

    `
}

//         `# ${data.description}

// One Paragraph of project description goes here`


    // use fs to write file 
    // we have to provide a file path/name

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

      if (err) {
        return console.log(err);
      }

      console.log("Success!");

    });
});


function writeToFile(fileName, data) {
    fs.writeFile('readMe.txt', 'data', function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      }); 
}
fs.appendFile('readMe.txt', 'data', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  }); 
function init() {

}

init();
