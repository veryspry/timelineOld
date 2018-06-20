const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/timeline', { logging: false})


const Day = db.define('days', {
  date: {
    type: Sequelize.TEXT
  },
  whatILearned: {
    type: Sequelize.TEXT
  },
  coffee: {
    type: Sequelize.TEXT
  },
  music: {
    type: Sequelize.TEXT
  },
  coolThingsIFound: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  coolThingsIFoundURL: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
})


module.exports = { Day, db }
