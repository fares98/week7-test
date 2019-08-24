const connection = require('./../config/connection');

const getCity = () => connection.query('Select * FROM cities');

module.exports = getCity;