import httpService from './httpService'

//call a service from https://api.artic.edu/docs/#quick-start
//https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number
//https://api.artic.edu/api/v1/artworks?page=2&limit=100
//https://api.artic.edu/api/v1/artworks/search?q=cats
//https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true
//Listing (e.g. /artworks)
//Detail (e.g. /artworks/{id})
//Search (e.g. /artworks/search) (optional)

//id=129884
const imageService = {
	async get(fields) {
		return httpService.get('/artworks', {
			params: {
				fields: fields || undefined
			},
		})
			.then((response) => response.data.images)
	}
}

export default imageService