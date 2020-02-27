Project Overview:
Project Instructions
Development
Running with the 3-Party-APIs
Extend Options
Project Instructions:
This repo is the code for the project FEND Capstone - Travel App. The project contains webpack configurations, express server which connect to 3 different 3-Party-APIs to get the necessary data. The code was produced as the requirements were understood in the development guide and project requirements.

The goal of this project is to give you practice with:

Setting up Webpack
Sass styles
Webpack Loaders and Plugins
Creating layouts and page design
Service workers
Using APIs and creating requests to external urls
all learned techniques
Development
Don't forget to run npm i in the beginning to install all needed modules.

To start development you simply run npm start for running the server and npm run dev to run the webpack-dev-server for the UI part.

Additionally I recommend to run in a separate terminal window npm t -- --watch to run the test suits in parallel in watch-mode. So you're able to see if you break core functionality.

Running with the 3-Party-APIs:
To run the server with the 3-Party-APIs you need an API Key or username and a baseUrl in an .env file. GEO_BASEURL and GEO_USERNAME for the Geonames API, DARKSKY_APIKEY and DARKSKY_BASEURL for the DarkSky API & PIXABAY_KEY and PIXABAY_BASEURL for the Pixabay API

Now you're able to run the server with the 3-Party-APIs to everything you need for the Trip planning.

Extend Options:
The extend options which was implemented is the remove a trip functionality