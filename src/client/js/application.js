
let geoURL =  `http://api.geonames.org/postalCodeSearchJSON?username=revathikumar&placename=${zip}`;
const geoUser= "revathikumar";
let darkSky = `https://api.darksky.net/forecast/b40dae4064cbd57a813f236aa8a5b3fe`;
let PixaBay = `https://pixabay.com/api?key=${pixabayapi}&image_type=photo&q=`;
let pixabayapi="15184331-3e9eed908ecfed85c90731c29";
let pixa = `https://pixabay.com/api?key=15184331-3e9eed908ecfed85c90731c29&image_type=photo&q=${zip}&pretty=true`






document.getElementById('submit').addEventListener('click', performAction);



function performAction(event) {
	event.preventDefault();

	const zip = document.getElementById('zip').value;
	countdowny();
	//dateDifference();
	

  fetchWeather(geoURL, zip )
  
		// New Syntax!
		.then(function (userData) {
			// Add data
			console.log(userData);
			postData('http://localhost:3000/add', {
				
				lng: userData.postalCodes[0].lng,
				lat: userData.postalCodes[0].lat,
				placeName: userData.postalCodes[0].placeName
			});
		})
		.then(
			updateUI()
		)
		
			
			
getClimate(darkSky, zip )
  
		// New Syntax!
		.then(function (userData) {
			// Add data
			console.log(userData);
			postData1('http://localhost:3000/add1', {
				latitude:userData.latitude,
				longtitude:userData.longtitude,
				summary:userData.currently.summary,
				temp: userData.currently.temperature,
				hightemp: userData.currently.apparentTemperature
			});
		})
		.then(
			updateUI1()
		)

	getimage(pixa, zip)
	// New Syntax!
	.then(function (userData) {
		// Add data
		console.log(userData);
		postData2('http://localhost:3000/add2', {
		
			picture: userData.hits[0].webformatURL
			
		});
	})
	.then(
		updateUI2()
	)
	

}

/* countdown days*/
function countdowny(){
	
	const startDate = new Date(document.getElementById('date').value);
const endDate = new Date(document.getElementById('end').value);
document.getElementById('departing').innerHTML = `<span>departing date: ${startDate}</span> `;

const time = new Date();

const countdown1 = Math.ceil(startDate - time);

const LoT = endDate.getTime() - startDate.getTime();
const deadline = (document.getElementById('countdown').textContent = 
Math.ceil(countdown1 / 8.64e7) + ' Days to go!');

const tripDuration = (document.getElementById('lengthoftrip').textContent =
LoT / 8.64e7 + ' Day trip.');
};

const dateDifference = (startDate, endDate) => {
return endDate.getTime() - startDate.getTime();

};


const postData = async(url = '', data = {}) => {
	 console.log(data)
	const response = await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(
			data
		) // body data type must match "Content-Type" header        
	});

	try {
		const newData = await response.json();
		return newData;
	} catch (error) {
		console.log(error);
		// appropriately handle the error
	}
}
const postData1 = async(url = '', data1 = {}) => {
	console.log(data1)
   const response = await fetch(url, {
	   method: 'POST', // *GET, POST, PUT, DELETE, etc.
	   credentials: 'same-origin', // include, *same-origin, omit
	   headers: {
		   'Content-Type': 'application/json',
		   'Access-Control-Allow-Origin': '*'
	   },
	   body: JSON.stringify(
		   data1
	   ) // body data type must match "Content-Type" header        
   });

   try {
	   const newData = await response.json();
	   return newData;
   } catch (error) {
	   console.log(error);
	   // appropriately handle the error
   }
}

const postData2 = async(url = '', pixadata = {}) => {
	console.log(pixadata)
   const response = await fetch(url, {
	   method: 'POST', // *GET, POST, PUT, DELETE, etc.
	   credentials: 'same-origin', // include, *same-origin, omit
	   headers: {
		   'Content-Type': 'application/json',
		   
	   },
	   body: JSON.stringify(
		   pixadata
	   ) // body data type must match "Content-Type" header        
   });

   try {
	   const newData = await response.json();
	   return newData;
   } catch (error) {
	   console.log(error);
	   // appropriately handle the error
   }
}


const fetchWeather = async(geoURL,zip) => {
	const res = await fetch(`http://api.geonames.org/postalCodeSearchJSON?username=revathikumar&maxRows=10&placename=${zip}`)
	try {
		const data = await res.json();

		return data;

	} catch (error) {
		console.log("error", error)
	}
}

const getClimate = async(darkSky,latitude,longtitude) => {
	 
	const res = await fetch(`https://api.darksky.net/forecast/b40dae4064cbd57a813f236aa8a5b3fe/${latitude=-11.27},${longtitude=-7.58}?exclude=hourly,minutely,flags,alerts&units=si`)
	try {
		const data = await res.json();

		return data;

	} catch (error) {
		console.log("error", error)
	}
}
const getimage = async(pixa,zip) => {
	const res = await fetch(`https://pixabay.com/api?key=15184331-3e9eed908ecfed85c90731c29&image_type=photo&q=${zip}&pretty=true`)
	try {
		const data = await res.json();

		return data;

	} catch (error) {
		console.log("error", error)
	}
}


const updateUI = async() => {
	const request = await fetch('http://localhost:3000/all');
	try {
		const data = await request.json()
		
		document.getElementById('cityName').innerHTML = `<span>My trip to:</span> ${data.placeName}`;
		
		document.getElementById('longtitude').innerHTML = `<span>longtitude:</span> ${data.lng}`
		document.getElementById('lat').innerHTML = `<span>latitude:</span> ${data.lat}`;

	} catch (error) {
		console.log("error", error);
	}
}

const updateUI1 = async() => {
	const request = await fetch('http://localhost:3000/all1');
	try {
		const res = await request.json()
		 

		document.getElementById('summary').innerHTML = `<span>Climate:</span> ${res.summary}`;
		document.getElementById('high').innerHTML = `<span>Normal temperature:</span> ${res.hightemp}`
		document.getElementById('low').innerHTML = `<span>High temperature:</span> ${res.temp}`;

	} catch (error) {
		console.log("error", error);
	}
}
const updateUI2 = async() => {
	const request = await fetch('http://localhost:3000/all2');
	try {
		const res = await request.json()
		
		document.querySelector('#test').innerHTML = `<img src=${res.picture} width="350" height="350">`;
		

	} catch (error) {
		console.log("error", error);
	}
}


module.exports = {performAction, fetchWeather, postData, updateUI, getClimate, postData1, updateUI1, postData2, updateUI2, getimage, };








    