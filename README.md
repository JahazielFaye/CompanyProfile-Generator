# Company Profile-Generator

*This is a command-line application that allows you to input your team members' information and generates a nicely formatted team roster HTML file based on your input.*

## Acceptance Criteria

- When prompted, provide team members' information such as their name, employee ID, email address, and office number.
- An HTML file is generated that displays a nicely formatted team roster based on user input.
- When clicking on an email address in the HTML, the default email program opens and populates the TO field of the email with the address.
- When clicking on the GitHub username, the corresponding GitHub profile opens in a new tab.
- You are prompted to enter the team manager's name, employee ID, email address, and office number when you start the application.
- After entering the team manager's information, you are presented with a menu with the option to add an engineer or an intern or to finish building your team.
- When selecting the engineer option, you are prompted to enter the engineer's name, ID, email, and GitHub username, and you are taken back to the menu.
- When selecting the intern option, you are prompted to enter the intern's name, ID, email, and school, and you are taken back to the menu.
- When you finish building your team, the application exits, and the HTML file is generated.

## Installation

To use this application, you must have [Node.js](https://nodejs.org/en/) installed on your computer. You can check if you have Node.js installed by opening your terminal and running the command:
node -v

If Node.js is installed, this command will return the version number. If not, please download and install Node.js.

Next, clone this repository to your local machine using the following command:
git clone <repository-url>

After cloning the repository, navigate to the root directory and run the following command to install the required dependencies:
Replace <repository-url> with the URL of the repository that you want to clone.

**This Challenge will require the use of the Inquirer package.** To ensure that you install and use Inquirer version 8.2.4, run the following command in your project folder:

**npm init**

**npm i inquirer@8.2.4**

**Tests have been setup with jest**. In order to run the test, use the following command:

**npm i jest.**

Then at the root of the folder, invoke the tests by using the following command:

**npm test.**

## Usage

To start the application, navigate to the root directory and run the following command:

**node index.js**

You will be prompted to enter the team manager's information. After entering the team manager's information, follow the on-screen instructions to add engineers and interns to your team.

When you are finished building your team, the application will exit, and an HTML file will be generated.

## Demo Video & Image Snippet
![Screenshot]("dist\Screenshot.png")




 Demo Video that demonstrate how to use the application to generate the Company Profile, and how to use the HTML file to view the roster and access team member information.
 click the link below :


 https://drive.google.com/file/d/15qvCw1dSH-uS1ZiRM6bdb-GZAqZ59L7l/view?usp=sharing