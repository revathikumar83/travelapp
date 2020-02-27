var Client=function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){let n=`http://api.geonames.org/postalCodeSearchJSON?username=revathikumar&placename=${zip}`;let o=`https://pixabay.com/api?key=15184331-3e9eed908ecfed85c90731c29&image_type=photo&q=${zip}&pretty=true`;function a(t){t.preventDefault();const e=document.getElementById("zip").value;!function(){const t=new Date(document.getElementById("date").value),e=new Date(document.getElementById("end").value);document.getElementById("departing").innerHTML=`<span>departing date: ${t}</span> `;const n=new Date,o=Math.ceil(t-n),a=e.getTime()-t.getTime();document.getElementById("countdown").textContent=Math.ceil(o/864e5)+" Days to go!",document.getElementById("lengthoftrip").textContent=a/864e5+" Day trip."}(),l(n,e).then((function(t){console.log(t),r("http://localhost:3000/add",{lng:t.postalCodes[0].lng,lat:t.postalCodes[0].lat,placeName:t.postalCodes[0].placeName})})).then(d()),s("https://api.darksky.net/forecast/b40dae4064cbd57a813f236aa8a5b3fe",e).then((function(t){console.log(t),c("http://localhost:3000/add1",{latitude:t.latitude,longtitude:t.longtitude,summary:t.currently.summary,temp:t.currently.temperature,hightemp:t.currently.apparentTemperature})})).then(p()),u(o,e).then((function(t){console.log(t),i("http://localhost:3000/add2",{picture:t.hits[0].webformatURL})})).then(m())}document.getElementById("submit").addEventListener("click",a);const r=async(t="",e={})=>{console.log(e);const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return await n.json()}catch(t){console.log(t)}},c=async(t="",e={})=>{console.log(e);const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(e)});try{return await n.json()}catch(t){console.log(t)}},i=async(t="",e={})=>{console.log(e);const n=await fetch(t,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return await n.json()}catch(t){console.log(t)}},l=async(t,e)=>{const n=await fetch(`http://api.geonames.org/postalCodeSearchJSON?username=revathikumar&maxRows=10&placename=${e}`);try{return await n.json()}catch(t){console.log("error",t)}},s=async(t,e,n)=>{const o=await fetch(`https://api.darksky.net/forecast/b40dae4064cbd57a813f236aa8a5b3fe/${-11.27},${-7.58}?exclude=hourly,minutely,flags,alerts&units=si`);try{return await o.json()}catch(t){console.log("error",t)}},u=async(t,e)=>{const n=await fetch(`https://pixabay.com/api?key=15184331-3e9eed908ecfed85c90731c29&image_type=photo&q=${e}&pretty=true`);try{return await n.json()}catch(t){console.log("error",t)}},d=async()=>{const t=await fetch("http://localhost:3000/all");try{const e=await t.json();document.getElementById("cityName").innerHTML=`<span>My trip to:</span> ${e.placeName}`,document.getElementById("longtitude").innerHTML=`<span>longtitude:</span> ${e.lng}`,document.getElementById("lat").innerHTML=`<span>latitude:</span> ${e.lat}`}catch(t){console.log("error",t)}},p=async()=>{const t=await fetch("http://localhost:3000/all1");try{const e=await t.json();document.getElementById("summary").innerHTML=`<span>Climate:</span> ${e.summary}`,document.getElementById("high").innerHTML=`<span>Normal temperature:</span> ${e.hightemp}`,document.getElementById("low").innerHTML=`<span>High temperature:</span> ${e.temp}`}catch(t){console.log("error",t)}},m=async()=>{const t=await fetch("http://localhost:3000/all2");try{const e=await t.json();document.querySelector("#test").innerHTML=`<img src=${e.picture} width="350" height="350">`}catch(t){console.log("error",t)}};t.exports={performAction:a,fetchWeather:l,postData:r,updateUI:d,getClimate:s,postData1:c,updateUI1:p,postData2:i,updateUI2:m,getimage:u}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function o(t){t.preventDefault(),document.getElementById("cityName").textContent="",document.getElementById("departing").textContent="",document.getElementById("lat").textContent="",document.getElementById("longtitude").textContent="",document.getElementById("content").textContent="",document.getElementById("test").textContent="",document.getElementsByClassName("gap").textContent="",document.getElementById("entryHolder").textContent=""}n.r(e),document.getElementById("removeTrip").addEventListener("click",()=>o(event));var a=o,r=n(0);n(1),n(2),n(3),n(4),n(5);n.d(e,"buttonHandler",(function(){return a})),n.d(e,"performAction",(function(){return r.performAction})),n.d(e,"fetchWeather",(function(){return r.fetchWeather})),n.d(e,"postData",(function(){return r.postData})),n.d(e,"updateUI",(function(){return r.updateUI})),n.d(e,"postData1",(function(){return r.postData1})),n.d(e,"updateUI1",(function(){return r.updateUI1})),n.d(e,"getClimate",(function(){return r.getClimate})),n.d(e,"postData2",(function(){return r.postData2})),n.d(e,"updateUI2",(function(){return r.updateUI2})),n.d(e,"getimage",(function(){return r.getimage}))}]);