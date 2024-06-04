
// band-site-api.js
function BandSiteApi(apiKey) {

    this.apiKey = apiKey;
    this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';


    this.postComment = async (comment) => {
        try {
            const response = await axios.post(this.baseUrl + 'comments?api_key=${api_key}', comment,)
            return response.data;
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    this.getComments = async () => {
        try {
            const response = await axios.get(this.baseUrl + 'comments', {
                params: {
                    api_key: api_key
                }
            })
            const comments = response.data;

            return comments;
        } catch (error) {
            console.error('Error getting comments:', error);
        }
    }

    this.getShows = async () => {
        try {
            const response = await axios.get(this.baseUrl + 'showdates', {
                params: {
                    api_key: api_key
                }
            })
            return response.data;
        } catch (error) {
            console.error('Error getting shows:', error);
        }
    }

    this.putComments = async (id) => {
        try {
            const response = await axios.put(this.baseUrl + `comments/${id}/like?api_key=${api_key}`, {

            })
            return response.data;
        } catch (error) {
            console.error('Error getting shows:', error);
        }
    }

    this.deleteComments = async (id) => {
        try {
            const response = await axios.delete(this.baseUrl + `comments/${id}`, {
                params: {
                    api_key: api_key
                }
            })
            return response.data;
        } catch (error) {
            console.error('Error getting shows:', error);
        }
    }
}
