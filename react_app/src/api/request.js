import axios from 'axios';

const BASE_URL = "https://api.github.com";

class Request {
	constructor() {
		this.request = axios.create({
			baseURL: BASE_URL,
		});
	}

    get = (url) => {
        return this.request.get(url);
    }
}


export const request = new Request();
