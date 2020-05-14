const axios = require('axios');
const config = require('../config.json');

class Rating {

    /**
     * Gets User's Rating History
     * 
     * @param   {Number} cid User's CID
     * @returns {JSON}       Rating History
     */
    getRatingHistory(cid){

        let URL;
        if(config.API_KEY == null){
            URL = `https://api.vatusa.net/v2/user/${cid}/rating/history`;
        } else {
            URL = `https://api.vatusa.net/v2/user/${cid}/rating/history?apikey=${config.API_KEY}`;
        }

        return axios.get(URL)
            .then(function (response) {
            return response.data;
        })

    }
}

module.exports = new Rating();