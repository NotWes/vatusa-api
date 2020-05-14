const axios = require('axios');
const config = require('../config.json');

class VATUSA {

    /**
     * Gets Facilities within VATUSA
     * 
     * @returns {JSON} Facilities
     */
    getFacilities(){

        const URL = "https://api.vatusa.net/v2/facility";

        return axios.get(URL)
            .then(function (response) {
            return response.data;
        })

    }
    
    /**
     * Gets Facility Information
     * 
     * @param   {String} artcc Facilities Three letter Identifier ex. (ZLC)
     * @returns {JSON}         Facility Information
     */
    getFacility(artcc){

        const URL = `https://api.vatusa.net/v2/facility/${artcc}`;

        axios.get(URL)
            .then(function (response) {
            return response.data;
        })
    }

    /**
     * Gets Facility Email Template
     * 
     * @param   {String} artcc        Facility Three Letter Identifier ex. (ZLC)
     * @param   {String} templateName Template Name ex. (welcome, examassigned, examfailed, exampassed)
     * @returns {JSON}                Email Template
     */
    getEmailTemplate(artcc, templateName){
        if(config.API_KEY == null) { console.log("need api key") };

        const URL = `https://api.vatusa.net/v2/facility/${artcc}/email/${templateName}?apikey=${config.API_KEY}`;

        return axios.get(URL)
            .then(function (response) {
                if(response.status == 200);
            })
            .then(function (response) {
                return response.data;
            })
            .catch(function (response) {
                return response.status;
            })
    
    }

    /**
     * Gets Facility Roster
     * 
     * @param   {String} artcc Facility Three Letter Identifier ex. (ZLC)
     * @returns {JSON}         Roster
     */
    getRoster(artcc){
        let URL;
        if(config.API_KEY == null){
            URL = `https://api.vatusa.net/v2/facility/${artcc}/roster`;
        } else {
            URL = `https://api.vatusa.net/v2/facility/${artcc}/roster?apikey=${config.API_KEY}`;
        }

        return axios.get(URL)
            .then(function (response) {
            return response.data;
        })

    }

    /**
     * Gets Pending Transfers
     * 
     * @param   {String} artcc Facility Three Letter Identifier ex. (ZLC)
     * @returns {JSON}         Transfers
     */
    getTransfers(artcc){
        let URL;
        if(config.API_KEY == null){
            URL = `https://api.vatusa.net/v2/facility/${artcc}/transfers`;
        } else {
            URL = `https://api.vatusa.net/v2/facility/${artcc}/transfers?apikey=${config.API_KEY}`;
        }

        return axios.get(URL)
            .then(function (response) {
            return response.data;
        })

    }

    /**
     * Gets ULS Return Paths
     * 
     * @param   {String} artcc Facility Three Letter Identifier ex. (ZLC)
     * @returns {JSON}         ULS Return Paths
     */
    getUlsReturnPaths(artcc){
        let URL;
        if(config.API_KEY == null){
            URL = `https://api.vatusa.net/v2/facility/${artcc}/ulsReturns`;
        } else {
            URL = `https://api.vatusa.net/v2/facility/${artcc}/ulsReturns?apikey=${config.API_KEY}`;
        }

        return axios.get(URL)
            .then(function (response) {
            return response.data;
        })

    }


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

    /**
     * Get Users Assigned to Specific Staff Role
     * 
     * @param   {String} artcc Facility Three Letter Identifier ex. (ZLC)
     * @param   {String} role  Staff Role ex. (ATM)
     * @returns {JSON}         Assigned Role
     */
    getAssignedRole(artcc, role){
        const URL = `https://api.vatusa.net/v2/user/roles/${artcc}/${role}`
        return axios.get(URL)
            .then(function (response) {
            return response.data;
        })
    }

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

module.exports = new VATUSA();