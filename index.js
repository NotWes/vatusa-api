/**
 * a Library for VATUSA's API written in Javascript
 * @author Wes Loeffler
 */

 const facility = require('./lib/facility');
 const transfer = require('./lib/transfer');
 const exam = require('./lib/exam');
 const rating = require('./lib/rating');
 const role = require('./lib/role');
 const solo = require('./lib/solo');

 module.exports = {
     facility: facility,
     transfer: transfer,
     exam: exam,
     rating: rating,
     role: role,
     solo: solo
 }