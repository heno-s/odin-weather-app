import {
    createDayElement,
    createHourElement,
} from "./elementsFactory";

export default class UI {
    static loadCurrent(currentForecast) {}

    static loadHourly(hourlyForecast) {
        clear();

        for (let i = 0; i < 3; i++) {
            const hours = document.querySelector(
                `.hours > [data-index="${i}"]`
            );
            for (let j = 0; j < 8; j++) {
                const hourlyData = {};
                hourlyData.dateTime = hourlyForecast[i * 8 + j].dt;
                hourlyData.iconCode =
                    hourlyForecast[i * 8 + j].weather[0].icon;
                hourlyData.temp = hourlyForecast[i * 8 + j].temp;
                hours.appendChild(createHourElement(hourlyData));
            }
        }

        function clear() {
            const hours = document.querySelectorAll(
                ".hours > [data-index]"
            );
            hours.forEach((hoursIndexed) => {
                hoursIndexed.innerHTML = "";
            });
        }
    }

    static loadDaily(dailyForecast) {
        const days = document.querySelector(".days");
        days.innerHTML = ""; // clear current days
        for (let i = 0; i < 7; i++) {
            const dailyData = {};
            dailyData.dateTime = dailyForecast[i].dt;
            dailyData.iconCode = dailyForecast[i].weather[0].icon;
            dailyData.minTemp = dailyForecast[i].temp.min;
            dailyData.maxTemp = dailyForecast[i].temp.max;
            const day = createDayElement(dailyData);
            days.appendChild(day);
        }
    }

    static displayHours(index) {
        if (isOutOfBonds(index)) {
            return false;
        }
        clearCurrent();
        const hoursToSetActive = document.querySelector(
            `.hours > [data-index="${index}"`
        );
        const dotToSetActive = document.querySelector(
            `.dot[data-index="${index}"`
        );

        hoursToSetActive.classList.add("active");
        dotToSetActive.classList.add("active");

        return true;

        function clearCurrent() {
            document
                .querySelector(".hours > .active")
                .classList.remove("active");
            document
                .querySelector(".dot.active")
                .classList.remove("active");
        }

        function isOutOfBonds(index) {
            return index < 0 || index > 2;
        }
    }

    static displayNextHours() {
        const currentIndex = +document.querySelector(
            ".hours > .active"
        ).dataset.index;
        UI.displayHours(currentIndex + 1);
    }

    static displayPreviousHours() {
        const currentIndex = +document.querySelector(
            ".hours > .active"
        ).dataset.index;
        UI.displayHours(currentIndex - 1);
    }
}
