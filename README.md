## What is this
This is a simple demonstration aiming to show:<br />
1. How to setup an Express Restful API server<br />
2. How can we do web scraping with NodeJS<br />
3. How a React App calls Restful API and shows the data<br />

### How this work
In 'express-api' folder, you will find code about:<br />
1. Running up Express Server which would serve different routes for different Restful API<br />
2. An API that calls IMDB upcoming movie page and grab the information as response<br />
In 'simple-demo' folder, you will find code about:<br />
1. A React app that consumes the Restful API and show the upcoming Movie title<br />

### How to run this up
1. `npm install` in 'express-api' folder
2. `npm start` in 'express-api' folder
3. `npm install` in 'simple-demo' folder
4. `npm start` in 'simple-demo' folder
5. visit `http://localhost:3000` in a web browser

### Whats missing
This is a really simple demo which aims to demonstrate how things work, you may find some parts of the code are violating best practices and error handling is missing. E.g.<br />
1. API call error is not well handled for different cases<br />
2. Lack of flexibility on the web scraping code<br />
3. All things are packed in App.js in the React App<br />
4. No linting applied<br />