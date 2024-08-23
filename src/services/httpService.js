import axios from 'axios';

// Create an axios instance
const httpService = axios.create({
	// Base URL for API requests
	baseURL: import.meta.env.VITE_ROOT_API_URL,

	// Headers for all requests
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},

	// Other configuration options...

	// Timeout for requests
	timeout: 60000, // 60 seconds

	// Additional options for customizing Axios
	// See https://axios-http.com/docs/api_intro
});

// Define common request interceptors
httpService.interceptors.request.use(
	(config) => {
		// Add a token to the request headers (if needed)
		//const token ='123' //get token from somwewhere
		//config.headers = {
		//  Authorization: `Bearer ${token}`
		//}
		if (localStorage.getItem('token')) {
			config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
		}
		return config;
	},
	(error) => {
		// Handle request errors
		console.log('error intercept request', error)
		return Promise.reject(error);
	}
);

// Define common response interceptors
httpService.interceptors.response.use(
	(response) => {
		// Handle successful responses
		return response; // Return the response object
	},
	(error) => {
		// Handle response errors
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.error('Error:', error);
			console.error('Error Response:', error.response);
			console.error('Error Response Data:', error.response.data);
			switch (error.response.status) {
				case 400:
					console.error('Error 400 message:', error.response.data.message)
					break
				case 401:
					console.error('Error 401 message:', error.response.data.message)
					break
				case 404:
					console.error('Error 404 message:', error.response.data.message)
					break
				default:
					console.error('Error message:', error.response.data.message)
			}
			return Promise.reject(error.response.data);
		} else if (error.request) {
			// The request was made but no response was received
			console.error('No response received:', error.request);
			return Promise.reject(error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.error('Error setting up request:', error.message);
			return Promise.reject(error.message);
		}
	}
);

/** 
 * Response status codes:
 * 
 * 200 – Response was ok
 * 204 – No content
 * 301 – Moved permanentely
 * 400 – Incorrect request
 * 401 – Not authorized
 * 403 – Prohibited
 * 404 – Not found
 * 500 – Internal Server Error
 * 
 * -----------------------------------
 * List of public APIs:
 * https://github.com/public-apis/public-apis
 */

// Export the axios instance
export default httpService;