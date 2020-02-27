
const dotenv = require('dotenv');
dotenv.config();

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
const cors= require('cors');
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('dist'));

const port = 3000;

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
})


projectData = {};
projectData1 = {};
pixa={};


const data = [];
const data1 = [];
const pixadata=[];

app.get('/all', getData)

function getData(req, res) {
	res.send(projectData)
}
app.get('/all1', getData1)

function getData1(req, res) {
	res.send(projectData1)
}
app.get('/all2', image)

function image(req, res) {
	res.send(pixa)
}

app.post('/add2', image1);

function image1(req, res) {

	pixa['picture'] = req.body.picture;
	

	res.send(pixa);

}


app.post('/add', addWeather);

function addWeather(req, res) {

	projectData['date'] = req.body.date;
	projectData['lat'] = req.body.lat;
	projectData['placeName'] = req.body.placeName;
	projectData['lng'] = req.body.lng;

	res.send(projectData);

}
app.post('/add1', addWeather1);

function addWeather1(req, res) {
    projectData1['longtitude'] = req.body.longtitude;
    projectData1['latitude'] = req.body.latitude;
	projectData1['temp'] = req.body.temp;
	projectData1['summary'] = req.body.summary;
	projectData1['hightemp'] = req.body.hightemp;

	res.send(projectData1);

}

// TODO-Spin up the server
 app.listen(port, listening);

function listening() {
	console.log(`server is listening on ${port}`);
}

