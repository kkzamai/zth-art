import httpService from './httpService'

const imageService = {
	async get(page, limit) {
		return httpService.get('/v2/list', {
			params: {
				page: page,
				limit: limit
			}
		}).then((response) => response.data)
	}
}

export default imageService