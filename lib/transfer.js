const axios = require('axios');
const config = require('../config.json');

class Transfer {

    /**
     * Gets User Transfer Checklist
     * 
     * @param cid Intiger ex. (5021841)
     */
    getTransferChecklist(cid){

        const URL = `https://api.vatusa.net/v2/user/${cid}/transfer/checklist?apikey=${config.API_KEY}`;

        axios.get(URL)
            .then(function (response) {
            console.log(response.data);
        })

    }
    /**
     * Gets Transfer History
     * 
     * @param cid Intiger ex. (5021841)
     */
    getTransferHistory(cid){

        const URL = `https://api.vatusa.net/v2/user/${cid}/transfer/history?apikey=${config.API_KEY}`;

        axios.get(URL)
            .then(function (response) {
            console.log(response.data);
        })

    }
}

module.exports = new Transfer();