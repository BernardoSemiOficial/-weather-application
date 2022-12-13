import axios, { AxiosInstance } from "axios";

interface ApiConstructor {
	baseUrl: string;
	apiKey: string;
}

export default class Axios {
	api: AxiosInstance;

	constructor({ baseUrl, apiKey }: ApiConstructor) {
		this.api = axios.create({
			baseURL: baseUrl,
			params: {
				apikey: apiKey,
			},
			headers: { "Content-Type": "application/json" },
		});
	}
}
