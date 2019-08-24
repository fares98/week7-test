const connection = require('./../config/connection');

const addCity = (city) => {
  return connection.query('insert into cities (name, city) values ($1, $2) RETURNING *', 
  [city.name, city.city]);
}

// const addCity = (info) => {
//   const sql = {
//     text: 'insert into cities (username, city) values ($1, $2) RETURNING *',
//     values: [info.name, info.city]
//   }
//   return connection.query(sql);
// }




module.exports = addCity;