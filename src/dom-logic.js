//dom-logic.js
import { DOM } from "./dom.js";
import { time } from "./logic.js";
import { getLocation, getWeather, locationToJson, dayManager } from "./logic.js";
import { setWeatherBackground } from "./weather-background.js";

let days = dayManager.days;

const popupButtons = (function () {
    DOM.accept.addEventListener("click", async () => {
        const location = await getLocation();   
        await locationToJson(location);
        DOM.popup.classList.add("hidden");
        console.log(days);
        DOM.content.id = 0;
        todayWeatherToDom(0);
    })

    DOM.refuse.addEventListener("click", () => {
        DOM.popup.classList.add("hidden");
    })
})();

function todayWeatherToDom(index) {
    let forHours = [];
    forHours = days[index].forHours;



    const hour = time();
    let weather = 0;
    if (parseInt(DOM.content.id) === 0) {
        weather = parseInt(days[index].forHours[hour].temp);
    }
    else {
        weather = parseInt(days[index].dayTemp);
    }

    const dayWeather = parseInt(days[index].dayTemp);
    const nightWeather = parseInt(days[index].nightTemp);
    const precip = parseInt(days[index].forHours[hour].precip);
    const humidity = parseInt(days[index].forHours[hour].humidity);
    const location = days[index].location;
    const date = days[index].datetime;
    const icon = days[index].icon;
    
    DOM.currentWeather.textContent = `${weather}°C`;
    DOM.currentDayWeather.textContent = ` ☀️ ${dayWeather}°C`;
    DOM.currentNightWeather.textContent = `🌙 ${nightWeather}°C`;
    DOM.currentHumidity.textContent = `💧 ${humidity}%`;
    DOM.currentPrecipitation.textContent = `⛈️ ${precip}%`;
    DOM.date.textContent = `${location}, ${date}`;

    setWeatherBackground(icon);


    forHours.forEach(hour => {
        const hourNumber = parseInt(hour.datetime.split(":")[0]);


        const card = document.createElement("div");
        card.classList.add("hour-card");
        card.innerHTML = `
          <div class="label">🕒 Ora</div>
        <div class="value">${hour.datetime}</div>
        <div class="label">🌡️ Temp</div>
        <div class="value">${parseInt(hour.temp)}°C</div>
        <div class="label">🌧️ Ploaie</div>
        <div class="value">${hour.precip}%</div>
        <div class="label">💧 Umiditate</div>
        <div class="value">${hour.humidity}%</div>
        `
        DOM.infosPerHour.appendChild(card);





    });

     
}

const leftRigtSubmit = (function () {
    DOM.rightButton.addEventListener("click", () => {
        if (parseInt(DOM.content.id) < 6) {
            DOM.infosPerHour.innerHTML = "";
            const currentIndex = parseInt(DOM.content.id);
            const nextIndex = currentIndex + 1;
            DOM.content.id = nextIndex;
            todayWeatherToDom(nextIndex);
        }
        else {
            alert('Nu poti vizualiza vremea pe mai mult de 7 zile.')
        }
    })
    DOM.leftButton.addEventListener("click", () => {
        if (parseInt(DOM.content.id) > 0) {
            DOM.infosPerHour.innerHTML = "";
            const currentIndex = parseInt(DOM.content.id);
            const nextIndex = currentIndex - 1;
            DOM.content.id = nextIndex;
            todayWeatherToDom(nextIndex);
        }
        else {
            alert('Dc vrei sa vezi vremea de ieri?')
        }
    })
    DOM.submit.addEventListener("click", async () => {
        DOM.infosPerHour.innerHTML = "";
        const location = DOM.userInput.value;
        dayManager.days.length = 0;
        await locationToJson(location);

        DOM.content.id = 0;
        todayWeatherToDom(0);
    })
})();


