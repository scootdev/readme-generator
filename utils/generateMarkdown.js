function generateMarkdown(data) {
  return `
# ${data.title}
${data.desc}
## Table of Contents
[Installation](#installation)<br>
[Usage](#usage)<br>
[Licensing](#licensing)<br>
[Contributing](#contributing)<br>
[Tests](#usage)<br>

## Installation
${data.install}

## Usage
${data.usage}

## Licensing
${data.license}

## Contributing
${data.contrib}

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
