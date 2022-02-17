// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {
      case "Apache 2.0":
        link = "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

      break;

      case "MIT":
        link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

      break;

      case "CC0":
        link = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";

      break;

      default:
        console.log("your selections aren't working")
    
  }
  return link;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return license

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return (

`# ${data.projectTitle}

# Table of Contents

  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Testing)
  * [License](#License)

# Description

  ${data.projectDescr}

# Installation Instructions

  ${data.installInstruct}

# Usage

  ${data.usageInstruct}

# Contributing

  ${data.contribInstruct}

# Testing

  ${data.testInstruct}

# License

${renderLicenseLink(data.licenseChoice)}
${renderLicenseBadge(data.licenseChoice)}


`);
}


module.exports = generateMarkdown;

