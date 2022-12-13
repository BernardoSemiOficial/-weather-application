import Axios from "../services/axios.js";

interface WeatherConstructor {
	apiKey: string;
	baseUrl: string;
}

interface CitySearchParams {
	city: string;
}

interface CurrentConditions {
	locationKey: string;
}

enum Endpoints {
	CITY_SEARCH = "/locations/v1/cities/search",
	CURRENT_CONDITIONS = "/currentconditions/v1",
}

export default class Weather {
	apiKey: string;
	baseUrl: string;
	http: Axios;

	constructor({ apiKey, baseUrl }: WeatherConstructor) {
		this.apiKey = apiKey;
		this.baseUrl = baseUrl;
		this.http = new Axios({ apiKey, baseUrl });
	}

	async citySearch({ city }: CitySearchParams) {
		const response = await this.http.api.get(Endpoints.CITY_SEARCH, {
			params: { q: city },
		});
		console.log(response.data);
	}

	async currentConditions({ locationKey }: CurrentConditions) {
		const response = await this.http.api.get(
			`${Endpoints.CURRENT_CONDITIONS}/${locationKey}`
		);
		console.log(response.data);
	}
}

const API_KEY = "YTEAocA7ed6GtKGZFnghH7iFyy7GJTeW";
const baseUrl = "http://dataservice.accuweather.com/";
const weather = new Weather({ apiKey: API_KEY, baseUrl });
console.log(weather);
