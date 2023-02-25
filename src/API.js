export async function getCoords(city) {
    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=81f0249eaacd160a330d176c5bc3d55f`
    );

    const responseJSON = await response.json();
    console.log(response);

    const { lat, lon, name } = responseJSON[0];

    return {
        lat,
        lon,
        name,
    };
}

export async function getWeatherData(coordinates, units = "metric") {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=20f7632ffc2c022654e4093c6947b4f4`
    );
    const responseJSON = await response.json();
    return responseJSON;
}
