'use strict';
let axios = require('axios');

function cleanData(data) {
	return data;
}

export default {
	get: (id) => {
		return axios.get('/socialLinkLists/' + id)
			.then(function(response) {
				return response.data;
			});
	},
	getAll: () => {
		return axios.get('/socialLinkLists')
			.then(function(response) {
				return response.data;
			});
	},
	create: (data) => {
		return axios.post('/socialLinkLists', data)
			.then(function(response) {
				return response.data;
			});
	},
	update: (id, data) => {
		return axios.put('/socialLinkLists/' + id, data)
			.then(function(response) {
				return response.data;
			});
	},
	remove: (id) => {
		return axios.delete('/socialLinkLists/' + id)
			.then(function(response) {
				return response.data;
			});
	}
};
