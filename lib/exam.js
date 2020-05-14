const axios = require('axios');
const config = require('../config.json');

class Exam {

    /**
     * Gets User's Exam History
     * 
     * @param   {Number} cid User's CID
     * @returns {JSON}       Exam History
     */
    getExamHistory(cid){

        let URL;
        if(config.API_KEY == null){
            URL = `https://api.vatusa.net/v2/user/${cid}/exam/history`;
        } else {
            URL = `https://api.vatusa.net/v2/user/${cid}/exam/history?apikey=${config.API_KEY}`;
        }

        return axios.get(URL)
            .then(function (response) {
            return response.data;
        })
    }

}

module.exports = new Exam();