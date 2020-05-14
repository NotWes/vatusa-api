const axios = require('axios');
const config = require('../config.json');

class Transfer {

    /**
     * Gets User Transfer Checklist
     * 
     * @param   {Number} cid User's CID
     * @returns {JSON}       Transfer Checklist
     */
    getTransferChecklist(cid){

        const URL = `https://api.vatusa.net/v2/user/${cid}/transfer/checklist?apikey=${config.API_KEY}`;

        return axios.get(URL)
            .then(function (response) {
            return response.data;
        })

    }
    /**
     * Gets Transfer History
     * 
     * @param   {Number} cid User's CID
     * @returns {JSON}       Transfer History
     */
    getTransferHistory(cid){

        const URL = `https://api.vatusa.net/v2/user/${cid}/transfer/history?apikey=${config.API_KEY}`;
        return axios.get(URL)
            .then(function (response) {
            return response.data;
        })

    }
    
}

module.exports = new Transfer();