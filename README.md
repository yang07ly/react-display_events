This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Getting Started

After cloning the project, run `npm install` to install node modules required for this project.

Before running the app, modify the variable `REACT_APP_API_URL` to the production API you are using. The default `REACT_APP_API_URL` is `http://localhost:1337/s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump` because a proxy server is run to overcome the problem of Cross Origin Resource Sharing (CORS).

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Unit Testing

`npm test`

Launches the test runner in the interactive watch mode.<br>

A simple test case "Error message for improper display of Event component" has been developed for this version. This case ensures that Event data is properly populated in the table at right places. This will be useful to prevent regression as a result of change in data structure.
