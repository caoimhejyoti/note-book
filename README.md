# Note Book
Application for taking down and saving notes.


![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)   ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)   ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

[![MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

----------------------------------------------------------------

[About](#about)  ✦  [User Story](#user-story)  ✦  [Acceptance Criteria](#acceptance-criteria)  ✦  [Prerequisites](#prerequisites)  ✦  [Usage](#usage)  ✦  [Future Developments](#future-developments)  ✦  [Resources](#resources)  ✦  [License](#license)  ✦  [Contact](#contact)

----------------------------------------------------------------

## About
This project used starter code to create an application called Note Book. Users can write and save notes using this application.

Using an Express.js backend, the application saves and retrieves data from a JSON file. 

The application has been deployed to Heroku. Please follow the link in [Usage](#usage) to the deployed application. 

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Prerequisites
- node.js
- express


## Usage
https://note-book.herokuapp.com/

When you follow the link you the home page will look like this:

![Screen grab of notebook landing page.](./public/assets/img/index-note-screenshot.png)

Once you select "Get Started" you will then be taken to the notes page. Here you can see saved notes on the left hand side and a blank note reading for making on the right hand side. 

![Screen grab of blank note for user to input information into.](./public/assets/img/blank-note-screenshot.png)

You are then able to type in your own note and can then select the save button on the right hand side of the nav bar.

![Screen grab of new note - unsaved.](./public/assets/img/typing-note-screenshot.png)

Once saved, your note will then appear on the left side of the site. 

![Screen grab of saved note.](./public/assets/img/saved-note-screenshot.png)

Users are able to select saved notes and they will appear on the right hand side, for in depth reading. 

![Screen grab of saved note being displayed.](./public/assets/img/display-note-screenshot.png)

If you wish to add a new note, please select the + on the right hand side of the nav bar. 

Selecting "Note Taker" on the left hand side of the nav bar will take users to the landing page.

Users are able to delete notes by pressing the red bin icon on the chosen note. 


## Resources
https://expressjs.com/en/5x/api.html#app.delete.method

https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options

https://github.com/Ileriayo/markdown-badges

https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide

## License
This project is using the following license:

**MIT**

For further information regarding the license, please follow the link below:
 https://opensource.org/licenses/MIT

----------------------------------------------------------------

## Contact 
If you have any further questions, please contact via email or github.

<a href="mailto:caoimhejyoti@gmail.com"><img alt="Link to email contact address" src="https://img.shields.io/badge/email-D14836?style=for-the-badge" target="_blank" /></a>  <a href="https://github.com/caoimhejyoti"><img alt="badge for GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank" /></a>