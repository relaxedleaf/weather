import axios from "axios";

const API_KEY = "*****";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;

	//axois.get(url) returns a promise
	const request = axios.get(url);

	console.log("Request (pre middleware):", request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
