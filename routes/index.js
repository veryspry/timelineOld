const express = require('express')
const router = express.Router()
const main = require('../views/main.js');


router.get('/', (req, res, next) => {
  res.send( main() )
})



















module.exports = router;
