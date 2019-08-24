const express = require("express");

const router = express.Router();
const getCity = require('./../database/queries/getCities');
const addCity = require('./../database/queries/addCity');

const getData = (req, res) => {
  getCity()
    .then(result => res.send(result.rows))
    .catch(err => console.log(err));
}

const postData = (req, res) => {
  addCity(req.body)
    .then(res.redirect('/'))
    .catch(err => console.log(err));
}

router.get('/cities', getData);
router.post('/add-city', postData);





module.exports = router;
