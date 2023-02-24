import { createHourElement } from "./elementsFactory";

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
