const axios = require('axios');
const config = require('../config.json');

class Facility {
    
    /**
     * Gets Facilities within VATUSA
     * 
     */
    getFacilities(){

        const URL = "https://api.vatusa.net/v2/facility";

        axios.get(URL)
            .then(function (response) {
            console.log(response.data);
        })

    }
    
    /**
     * Gets Facility Information
     * 
     * @param artcc String ex. (ZLC)
     */
    getFacility(artcc){

        const URL = `https://api.vatusa.net/v2/facility/${artcc}`;

        axios.get(URL)
            .then(function (response) {
            console.log(response.data);
        })
    }

    /**
     * Gets Facility Email Template
     * 
     * @param artcc String ex. (ZLC)
     * @param templateName String ex. (welcome, examassigned, examfailed, exampassed)
     */
    getEmailTemplate(artcc, templateName){
        if(config.API_KEY == null) { console.log("need api key") };

        const URL = `https://api.vatusa.net/v2/facility/${artcc}/email/${templateName}?apikey=${config.API_KEY}`;

        axios.get(URL)
            .then(function (response) {
                if(response.status == 200);
            })
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (response) {
                console.log(response.status);
            })
    
    }

    /**
     * Gets Facility Roster
     * 
     * @param artcc String ex. (ZLC)
     */
    getRoster(artcc){
        let URL;
        if(config.API_KEY == null){
            URL = `https://api.vatusa.net/v2/facility/${artcc}/roster`;
        } else {
            URL = `https://api.vatusa.net/v2/facility/${artcc}/roster?apikey=${config.API_KEY}`;
        }

        axios.get(URL)
            .then(function (response) {
            console.log(response.data);
        })

    }

    /**
     * Gets Pending Transfers
     * 
     * @param artcc String ex. (ZLC)
     */
    getTransfers(artcc){
        let URL;
        if(config.API_KEY == null){
            URL = `https://api.vatusa.net/v2/facility/${artcc}/transfers`;
        } else {
            URL = `https://api.vatusa.net/v2/facility/${artcc}/transfers?apikey=${config.API_KEY}`;
        }

        axios.get(URL)
            .then(function (response) {
            console.log(response.data);
        })

    }

    /**
     * Gets ULS Return Paths
     * 
     * @param artcc String ex. (ZLC)
     */
    getUlsReturnPaths(artcc){
        let URL;
        if(config.API_KEY == null){
            URL = `https://api.vatusa.net/v2/facility/${artcc}/ulsReturns`;
        } else {
            URL = `https://api.vatusa.net/v2/facility/${artcc}/ulsReturns?apikey=${config.API_KEY}`;
        }

        axios.get(URL)
            .then(function (response) {
            console.log(response.data);
        })

    }

}

module.exports = new Facility();