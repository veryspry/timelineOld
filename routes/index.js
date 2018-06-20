const express = require('express')
const router = express.Router()
const main = require('../views/main')

const { db, Day } = require('../models/index')
// const Day = models.day;


router.get('/', async (req, res, next) => {
  try {
    const days = await Day.findAll()
    res.send( main(days) )
  } catch (err) {
    next(err)
  }
})



















module.exports = router;
