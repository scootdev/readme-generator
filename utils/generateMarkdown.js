function generateMarkdown(data) {
  return `
# ${data.title}
${data.desc}

`;
}

module.exports = generateMarkdown;
