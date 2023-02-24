import { createHourElement } from "./elementsFactory";

import { getCoords, getWeatherData } from "./API";

for (let i = 0; i < 3; i++) {
    const hours = document.getElementById(`hours-${i}`);
    for (let j = 0; j < 7; j++) {
        hours.appendChild(
            createHourElement({
                dateTime: 1646316000,
                iconCode: "50n",
                degree: 13,
            })
        );
    }
}

getCoords("Sereď")
    .then(async (coords) => {
        const data = await getWeatherData(coords, "standard");
        console.log(data);
    })
    .catch(console.log);
