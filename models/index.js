const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/timeline')


const Day = db.define('days', {
  date: {
    type: Sequelize.DATE
  },
  learned: {
    type: Sequelize.STRING //type: Sequelize.TEXT???
  },
  coffee: {
    type: Sequelize.STRING
  },
  music: {
    type: Sequelize.STRING
  },
  coolThings: {
    type: Sequelize.STRING
  }
})


module.exports = { db, Day }
