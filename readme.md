# LGBTQ+ Website Redesign

## Leighton M, Jalen L, Blake I

## To-do


## Documentation

** No longer using Django as website has no need for a backend, but may implement backend in the future for an admin portal **

### -- Stack -- 

React (Front end framework), Webpack (Compiles javascript), Babel (React compiler preset), Vercel (hosting & deployment)

### -- Getting started -- 

#### INSTALL DEPENDENCIES
1. Make sure you have node installed on your computer
2. In a new terminal, run "npm install"

#### RUN THE APPLICATION

1. Run "npm run build" to create a build for the project
2. Use live server VSCode extension, right click HTML file, Open with liver server

### -- Development & Production Life Cycle --

#### TASK ASSIGNMENT & COMPLETION

- For issues and completing tasks, we will use GitHub issues and pull request
- An issue will be assigned to someone and in that issue, the assigned person can create a branch for the issue
- After completing your task and pushing your changes in the branch you made, make a pull request to main and assign someone else to review your changes
- Vercel will have automatically check for merge conflicts and will give you a deployment preview for your branch, use these to test changes
- After the pull request reviewer reviews the changes and tests changes in deployment preview and all is good, pull request reviewer can merge the changes to main

#### DEVELOPMENT

- Run "npm run dev" in a new terminal, this will run webpack in development mode and your changes will be re-built upon every save
- Webpack compiles any javascript framework (we are using React in this case) into a static javaScript file that an HTML page can take as a source
- Webpack is configured to compile to a folder called dist
- Before you push your changes, make sure to run prettier to format all you code, You can install prettier as a VS Code extension : https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code

#### PRODUCTION

- A production build can be ran with command "npm run build"
- No need to worry about creating production builds as Vercel is configured to run a production build on the cloud upon a deploy


#### VERCEL

- The repo is connected to Vercel and automatically re-delopys with changes to main
- Vercel is configured to run a production build upon a new deploy






