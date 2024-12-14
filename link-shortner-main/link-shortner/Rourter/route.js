const express = require("express")
const route = express.Router();
//this will get the function from controller url folder

const {showdata} = require('../controller/url')
const {generateid} = require('../controller/url')

route.post('/',generateid)
module.exports = route


