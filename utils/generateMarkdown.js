// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache License 2.0":
      return`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GNU General Public License v3.0":
      return`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    default:
      return "";
}
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return `https://choosealicense.com/licenses/mit/`;
    case "Apache License 2.0":
      return`https://choosealicense.com/licenses/apache-2.0/`;
    case "GNU General Public License v3.0":
      return`https://choosealicense.com/licenses/gpl-3.0/`;
    default:
      return "";
}}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, _github_username) {

  switch (license) {
    case "MIT License":
      return `Copyright (c) [2024] [${_github_username}]

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    case "Apache License 2.0":
      return`  Copyright [2024] [${_github_username}]

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
          http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
    case "GNU General Public License v3.0":
      return`This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
    default:
      return "";

  }
}


// Create a function to generate markdown for README
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

   const license_content = renderLicenseSection(license, github_username);
   const license_url = renderLicenseLink(license);
   const license_badge = renderLicenseBadge(license);
  
  markdownContent = `# ${title}

  ${license_badge}
  
  ## Description
  
  - The motivation for this project is: ${motivation}
  - The reason why I build this project is: ${reason}
  - The problem this project solved is: ${problem}
  - What I learnt from this project is: ${learnt}
  
  
  ---
  ## Navigation of Contents
  
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
  3. Open the project using vs code and generate the README.md file
  4. Deploy the project to github pages
  
  
  ---
  ## Usage
  When you open the project in your code editor, you will see the following page.
  
  ${usage_information}
  
  ![Alt text](./assets/image/${usage_iamge_name})
  
  
  ---
  ## Credits
  
  * ${collaborators}
  
  * ${third_party_resources}
  
  
  ---
  ## License
  
  [${license}](${license_url})
  
  ${license_content}
  
  
  ---
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly. You can find this repo at [Github](https://github.com/${github_username}/${title})
  
  #### Additional questions
  
  if you have additional quesitons, please feel free to reach me out at ${email_address}
  
  ---
  ## Tests
  
  ${test_instructions}`;
  
  return markdownContent;
}

module.exports = generateMarkdown;
