
"use strict";

// const API = "c0e4b977b2594195be1161328241012";
//! search variables
const searchLocation = document.querySelector('#searchLocation');
const btnLocation = document.querySelector('#btnLocation');

//! today variables
// const Contact = document.querySelector('#Contact');
const defaultDay = document.querySelector('.default-day');
const defaultDate = document.querySelector('.default-date');
const defaultNumber = document.querySelector('.default-number');

const todayLocation = document.querySelector('#todayLocation');
const todayTemp = document.querySelector('#todayTemp');
const todayImg = document.querySelector('#todayImg');
const todayIcon = document.querySelector('#todayIcon');

const todayHumidity = document.querySelector('#todayHumidity');
const todayWind = document.querySelector('#todayWind');
const todayWindDirection = document.querySelector('#todayWindDirection');

//! tomorrow variables
const nextDayName = document.querySelector('#nextDayName');
const nextDayImg = document.querySelector('#nextDayImg');
const nextMaxTemp = document.querySelector('#nextMaxTemp');
const nextMinTemp = document.querySelector('#nextMinTemp');
const nextConditionText = document.querySelector('#nextConditionText');

//! after tomorrow variables
const afterNextDayName = document.querySelector('#afterNextDayName');
const afterNextDayImg = document.querySelector('#afterNextDayImg');
const afterNextMaxTemp = document.querySelector('#afterNextMaxTemp');
const afterNextMinTemp = document.querySelector('#afterNextMinTemp');
const afterNextConditionText = document.querySelector('#afterNextConditionText');

//!  variables
const Home = document.querySelector('#Home');
const Contact = document.querySelector('#Contact');




// //* add event
// btnLocation.addEventListener('click', (eventInfo) => {

//     eventInfo.preventDefault();

//     //* check empty value
//     if (searchLocation.value !== "") {
//         const search = searchLocation.value;
//         searchLocation.value = "";
//         findLocation(search);
//     } else {
//         console.log('Please Enter City or Country Name')
//         alert('Please Enter City or Country Name')
//     }
// })


navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords)

    let myLatitude = position.coords.latitude;
    let myLongitude = position.coords.longitude;
    findLocation(`${myLatitude},${myLongitude}`);
})

searchLocation.addEventListener('input', (eventInfo) =>{

    let currentValue = eventInfo.target.value
    findLocation(currentValue);
})

async function findLocation(countryName) {


    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${countryName}&days=3&key=c0e4b977b2594195be1161328241012`);
    let data = await response.json();
    console.log(data);

    displayWeather(data);
    displayTomorrowData(data);
    displayAfterTomorrowData(data)
}


function displayWeather(data) {

    let todayDate = data.current.last_updated; // shaylh el tare5 we el wa2t bta3 anhradh
    console.log(todayDate);

    let myDateName = new Date(todayDate);
    
    let todayName = myDateName.toLocaleString('en-us', {weekday:'long'});

    defaultDay.innerHTML = todayName;

    let todayMonth = myDateName.toLocaleString('en-us', {month:'long'});
    let todayDay = myDateName.getDate();

    defaultDate.innerHTML = todayMonth;
    defaultNumber.innerHTML = todayDay;

    todayLocation.innerHTML = data.location.country;
    todayTemp.innerHTML = data.current.temp_c;
    
    todayIcon.innerHTML = data.current.condition.text;

    let currentImg = data.current.condition.icon;
    let currentSrc = `https:${currentImg}`;

    todayImg.setAttribute('src', currentSrc);
    
    todayHumidity.innerHTML = data.current.humidity;
    todayWind.innerHTML = data.current.wind_kph;
    todayWindDirection.innerHTML = data.current.wind_dir;
}

function displayTomorrowData(data){
    
    let tomorrowDate = data.forecast.forecastday[1];
    console.log(tomorrowDate);

    let myTomorrowDate = new Date(tomorrowDate.date);

    let mytomorrowName = myTomorrowDate.toLocaleString('en-us', {weekday:'long'});

    nextDayName.innerHTML = mytomorrowName;

    let tomorrowImg = tomorrowDate.day.condition.icon;
    let tomorrowSrc = `https:${tomorrowImg}`;

    nextDayImg.setAttribute('src', tomorrowSrc);

    nextMaxTemp.innerHTML = tomorrowDate.day.maxtemp_c;
    nextMinTemp.innerHTML = tomorrowDate.day.mintemp_c;
    nextConditionText.innerHTML = tomorrowDate.day.condition.text;

}

function displayAfterTomorrowData(data){

    
    let afterTomorrowDate = data.forecast.forecastday[2];
    console.log(afterTomorrowDate);

    let myAfterTomorrowDate = new Date(afterTomorrowDate.date);

    let myAftertomorrowName = myAfterTomorrowDate.toLocaleString('en-us', {weekday:'long'});

    afterNextDayName.innerHTML = myAftertomorrowName;

    let afterTomorrowImg = afterTomorrowDate.day.condition.icon;
    let afterTomorrowSrc = `https:${afterTomorrowImg}`;

    afterNextDayImg.setAttribute('src', afterTomorrowSrc);

    afterNextMaxTemp.innerHTML = afterTomorrowDate.day.maxtemp_c;
    afterNextMinTemp.innerHTML = afterTomorrowDate.day.mintemp_c;
    afterNextConditionText.innerHTML = afterTomorrowDate.day.condition.text;

}

Home.addEventListener('click',function(e){
    window.location.assign('index.html')
})
Contact.addEventListener('click',function(e){
    window.location.assign('contact.html')
})








// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// function displayWeather(data) {
//     //* display the day
//     const day = new Date();
//     const dayName = days[day.getDay()];
//     // console.log(dayName);
//     defaultDay.textContent = dayName;

//     //* display the date
//     let todayName = day.toLocaleString('en-us', {weekday:'long'});
//     defaultDay.innerHTML = todayName;

//     let month = day.toLocaleString("default", { month: "long" });
//     let date = day.getDate();
//     let year = day.getFullYear();
//     // console.log(month, date, year);
//     // defaultDate.textContent = month + " " + date + " " + year
//     defaultDate.textContent = `${date} ${month} ${year}`
   

    
//     todayLocation.innerHTML = data.location.country;
//     todayTemp.innerHTML = data.current.temp_c;
    
//     todayIcon.innerHTML = data.current.condition.text;

//     let currentImg = data.current.condition.icon;
//     let currentSrc = `https:${currentImg}`;

//     todayImg.setAttribute('src', currentSrc);
    
//     todayHumidity.innerHTML = data.current.humidity;
//     todayWind.innerHTML = data.current.wind_kph;
//     todayWindDirection.innerHTML = data.current.wind_dir;
// }











