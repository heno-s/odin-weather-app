import { getWeatherIcon } from "./utils.js";

export function createHourElement(data) {
    const { dateTime, iconCode, temp } =
        data === undefined ? {} : data;
    const date = new Date(dateTime * 1000);
    const time = `${(date.getHours() + "").padStart(2, "0")}:${(
        date.getMinutes() + ""
    ).padStart(2, "0")}`;

    const hour = document.createElement("div");
    hour.classList.add("hour");

    hour.innerHTML = `<div class="hour-time">${
        data ? time : "----"
    }</div>
    <div class="hour-icon">
        ${data ? getWeatherIcon(iconCode) : getWeatherIcon("01d")}
    </div>
    <div class="hour-temp">
        <div class="hour-temp-icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <title>thermometer</title>
                <path
                    d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z"
                    fill="#333"
                />
            </svg>
        </div>
        <div class="hour-temp-number">
            ${data ? temp + "°C" : "----"}
        </div>
    </div>`;

    return hour;
}

export function createDayElement(data) {
    const { dateTime, iconCode, minTemp, maxTemp } =
        data === undefined ? {} : data;
    const day = document.createElement("div");
    day.classList.add("day");
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayName = days[new Date(dateTime * 1000).getDay()];

    day.innerHTML = `<div class="day-icon">
    ${data ? getWeatherIcon(iconCode) : getWeatherIcon("01d")}
</div>
<div class="day-temp">
    <span class="day-max">${data ? maxTemp : "--"}</span>/<span
        class="day-min"
        >${data ? minTemp : "--"}</span
    >
    <span class="day-temp-unit">°C</span>
</div>
<div class="day-name">${data ? dayName : "----"}</div>`;

    return day;
}
