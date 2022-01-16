import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export async function getData(url) {
	try {
		const response = await axios.get(`${API_URL}/schools`);
		return response.data;
	} catch (err) {
		console.log("Could Not fetch data:", err);
	}
}
