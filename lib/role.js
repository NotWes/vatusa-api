const axios = require('axios');

class Role {

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

}

module.exports = new Role();