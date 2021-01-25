// function to generate markdown for README
function fixLicense (license){
  var fixedLicense = license.split(" ").join("%20");
  return fixedLicense;
}



function generateMarkdown(data) {
  return `# ${data.projName}
 ### by ${data.gitUser}
 ![license badge](https://img.shields.io/badge/License-${fixLicense(data.license)}-blue)
 
`;
}

module.exports = generateMarkdown;
