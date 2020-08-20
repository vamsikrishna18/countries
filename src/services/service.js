import axios from 'axios'

const baseUrl = 'http://13.57.235.126:5000'

export const getCountriesList = (callback) => {
    axios
        .get(`${baseUrl}/countries`)
        .then((response) => {
            if (response) {
                callback(response.data)
            }
        })
        .catch((error) => callback(error))
}

export const addCountryToList = (country, callback) => {
    axios
        .get(`${baseUrl}/addcountry?name=${country}`)
        .then((response) => {
            if (response) {
                callback(response.data)
            }
        })
        .catch((error) => callback(error))
}
