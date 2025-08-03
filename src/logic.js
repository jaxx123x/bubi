//logic.js
import { DOM } from "./dom.js";

export const dayManager = {
    days: []
}


class currentDay {
  constructor(dayTemp, nightTemp, temp, humidity, precipitation, forHours, location, hour, icon, id, datetime) {
    this.dayTemp = dayTemp;
    this.nightTemp = nightTemp;
    this.temp = temp;
    this.humidity = humidity;
    this.precipitation = precipitation;
    this.forHours = forHours;
    this.location = location;
    this.hour = hour;
    this.icon = icon;
    this.id = id;
    this.datetime = datetime;
  }

  pushIn() {
    dayManager.days.push(this);
  }
}

class forHoursTemp {
  constructor(datetime, humidity, precip, temp) {
    this.datetime = datetime;
    this.humidity = humidity;
    this.precip = precip;
    this.temp = temp;
  }
}

export const time = function() {
    const currTime = Date.now();
    const now = new Date(currTime);
    const hour = now.getHours();
    return hour;
};




export async function getLocation() {
  function getCurrentPositionPromise() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  if (!navigator.geolocation) {
    alert("location denied");
    return null;
  }
  try {
    const position = await getCurrentPositionPromise();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const data = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=06d15b59415252f20073e20a617908d5`,
    );
    const json = await data.json();
    const location = `${json[0].name}, ${json[0].country}`;
    return location;
  } catch {
    alert("error");
    return null;
  }
}


export async function getWeather(city) {
  const location = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=G6M7JFRQTGQL4S2BAE4XY46J5`,
  );
  const json = await location.json();
  return json;
}


export async function locationToJson(locationName) {
const result = await getWeather(locationName);
  console.log(result);
  for (let i = 0; i < 7; i++) {
    const dayTemp = ((result.days[i].tempmax - 32) * 5) / 9;
    const nightTemp = ((result.days[i].tempmin - 32) * 5) / 9;
    const temp = ((result.days[i].temp - 32) * 5) / 9;
    const humidity = result.days[i].humidity;
    const precipitation = result.days[i].precipprob;
    const forHours = [];
    const loc = result.address;
    const currentTime = result.currentConditions.datetime;
    const icon = result.currentConditions.icon;
    const id = i;
    const datetime = result.days[i].datetime;
    for (let j = 0; j < 24; j++) {
      const hour = result.days[i].hours[j].datetime;
      const humidity = result.days[i].hours[j].humidity;
      const precip = result.days[i].hours[j].precipprob;
      const hourTemp = ((result.days[i].hours[j].temp - 32) * 5) / 9;
      forHours.push(new forHoursTemp(hour, humidity, precip, hourTemp));
    }

    const thisDay = new currentDay(
      dayTemp,
      nightTemp,
      temp,
      humidity,
      precipitation,
      forHours,
      loc,
      currentTime,
      icon,
      id,
      datetime
    );
    thisDay.pushIn();
  }
  
};


export async function searchBar() {
  
}