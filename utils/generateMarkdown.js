// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  console.log(data);
  const { title, 
    motivation, 
    reason, 
    problem, 
    learnt, 
    installation_instructions,
    usage_information,
    usage_iamge_name,
    collaborators,
    third_party_resources,
    test_instructions,
    license,
    github_username,
    email_address
   } = data;
  
  markdownContent = `# ${title}

  ${license_badge}
  
  ## Description
  
  - The motivation for this project is:${motivation}
  - The reason why I build this project is:${reason}
  - The problem this project solved is:${problem}
  - What I learnt from this project is:${learnt}
  
  
  ---
  ## Table of Contents
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  - [Tests](#tests)
  
  ---
  ## Installation
  ${installation_instructions}
  
  1. Get a free API Key at [github](https://github.com/${github_username}/${title}#built-with)
  2. Clone the repo
     \`\`\`sh
     git clone https://github.com/${github_username}/${title}.git
     \`\`\`
  3. Open the project using vs code and run it in browser
  
  
  ---
  ## Usage
  When you open the project in your browser, you will see the following page.
  
  ${usage_information}
  
  ![Alt text](./assets/image/${usage_iamge_name})
  
  
  ---
  ## Credits
  
  ${collaborators}
  
  ${third_party_resources}
  
  
  ---
  ## License
  
  ${license}
  
  ${license_content}
  
  
  ---
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly. You can find this repo at [https://github.com/${github_username}/${title}](https://github.com/${github_username}/${title})
  
  #### Additional questions
  
  if you have additional quesitons, please feel free to reach me out at ${email_address}
  
  ---
  ## Tests
  
  ${test_instructions}`;
  
  return markdownContent;
}

module.exports = generateMarkdown;
