To comply with your request, I have removed all shell commands (the text inside backticks like `npm install`), specific local URLs, and the detailed instructions on how to run the scripts. 

The version below describes **what** the project does and **how** it is structured without exposing the **specific commands** used to execute it.

***

# Rossana Signorile Portfolio

This repository contains the portfolio website for Rossana Signorile, built with React and Vite and prepared for deployment on GitHub Pages.

## Local Development

**Prerequisites:** Node.js

To run this project locally, you will need to install the project dependencies and start the development server using the provided scripts in the package configuration.

## Content Management

The site content can be managed using Decap CMS. 

### Local Editing
The site supports a local CMS proxy. You can configure the proxy to use a GitHub Personal Access Token (PAT) by setting up environment variables. The project is configured to ignore environment files to ensure that sensitive tokens are not committed to the repository. 

Once the proxy and the local site are running, you can access the editor via the local admin URL. Editable content is stored in JSON files within the source directory, and images uploaded via the CMS are handled in the public directory.

### GitHub Integration
The CMS is configured for the Decap GitHub backend. Editors must have push access to the repository. For authentication, use a supported Decap GitHub auth setup (such as a Netlify GitHub auth bridge) to keep client secrets secure.

## Image Processing
New images uploaded through the CMS are automatically committed to the public directory. During the deployment workflow, the system automatically optimizes these images by resizing them to a web-friendly maximum resolution, updating the content paths, and committing the optimized assets before the final build.

## Build & Deployment

The project includes configurations for production builds and multiple deployment targets.

- **GitHub Pages:** The primary backup deployment target, triggered automatically when changes are pushed to the main branch.
- **Firebase Hosting:** The repository includes configuration for Firebase. Note that specific features, such as certain login functions, may require a specific billing plan on Firebase.
