const axios = require('axios');
const config = require('../config.json');

class Solo {

    /**
     * Gets List of Active Solo Certifications
     * 
     * @returns {JSON} Solo Certifications
     */
    getSoloCertifications(){

        const URL = `https://api.vatusa.net/v2/solo`

        return axios.get(URL)
            .then(function (response) {
            return response.data;
        })
    }

}

module.exports = new Solo();