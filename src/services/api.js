import axios from 'axios';

const baseURL = 'https://www.breakingbadapi.com/';

export const getAllEpisodes = async () => {
	try {
		const res = await axios.get(`${baseURL}api/episodes`);

		return res.data;
	} catch (error) {
		console.log('ERROR: ', error);
	}
};

export const getEpisodeById = async (id) => {
	try {
		const res = await axios.get(`${baseURL}api/episodes/${id}`);

		return res.data;
	} catch (error) {
		console.log('ERROR: ', error);
	}
};

export const getCharacterByName = async (name) => {
	try {
		const res = await axios.get(`${baseURL}api/characters?name=${name}`);

		return res.data;
	} catch (error) {
		console.log('ERROR: ', error);
	}
};
