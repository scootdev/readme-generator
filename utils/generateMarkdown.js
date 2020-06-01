function generateMarkdown(data) {
  return `
# ${data.title}

![Stars badge](https://img.shields.io/github/stars/${data.github}/${data.repo})
![Language Count](https://img.shields.io/github/languages/count/${data.github}/${data.repo})
![Top Language](https://img.shields.io/github/languages/top/${data.github}/${data.repo})

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

![License badge](https://img.shields.io/github/license/${data.github}/${data.repo})<br>
${data.license}

## Contributing

${data.contrib}

## Tests

${data.tests}
`;
}

module.exports = generateMarkdown;
