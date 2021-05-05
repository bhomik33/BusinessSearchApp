import axios from 'axios';

const yelpAPI = axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer APIKEY'
    }
})

export default yelpAPI