// function to generate markdown for README
function fixLicense (license){
  var fixedLicense = license.split(" ").join("%20");
  return fixedLicense;
}


// function that generates the markdown in the readme
function generateMarkdown(data) {
  return `# ${data.projName}
 ### by ${data.gitUser}
 ${data.projLink}
 ![screenshot](${data.screenLink})


 ![license badge](https://img.shields.io/badge/License-${fixLicense(data.license)}-blue)
 
`;
}

module.exports = generateMarkdown;
