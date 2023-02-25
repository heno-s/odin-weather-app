import {
    createDayElement,
    createHourElement,
} from "./elementsFactory";

import { getCoords, getWeatherData } from "./API";
import UI from "./UI";

const searchForm = document.forms["search-form"];
const controls = document.querySelector(".controls");

searchForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    const city = searchForm.city.value.trim();
    const coordinates = await getCoords(city);
    console.log(coordinates);
    const forecast = await getWeatherData(coordinates);
    console.log(forecast);
    forecast.current.city = city; // needs to show city in current element
    UI.loadCurrent(forecast.current);
    UI.loadHourly(forecast.hourly);
    UI.loadDaily(forecast.daily);
    searchForm.reset();
});

controls.addEventListener("click", (evt) => {
    const t = evt.target;

    if (t.closest(".left-arrow")) {
        UI.displayPreviousHours();
    } else if (t.closest(".right-arrow")) {
        console.log("HERE");
        UI.displayNextHours();
    } else if (t.closest(".dot")) {
        UI.displayHours(+t.dataset.index);
    }
});

for (let i = 0; i < 3; i++) {
    const hours = document.querySelector(
        `.hours > [data-index="${i}"]`
    );
    for (let j = 0; j < 8; j++) {
        hours.appendChild(
            createHourElement({
                dateTime: 1646316000,
                iconCode: "50n",
                temp: 13,
            })
        );
    }
}

for (let i = 0; i < 7; i++) {
    const days = document.querySelector(".days");
    days.appendChild(
        createDayElement({
            dateTime: 1646316000,
            iconCode: "10d",
            minTemp: -10,
            maxTemp: 20,
        })
    );
}

// getCoords("Sereď")
//     .then(async (coords) => {
//         const data = await getWeatherData(coords, "standard");
//         console.log(data);
//     })
//     .catch(console.log);
