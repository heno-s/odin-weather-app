import { getWeatherIcon } from "./utils.js";

export function createHourElement(data) {
    const { dateTime, iconCode, degree } =
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
            ${data ? degree + "°C" : "----"}
        </div>
    </div>`;

    return hour;
}
