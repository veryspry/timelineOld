const { db, Day } = require('../models/index.js')


db.sync({force: true})
  .then(() => {
    console.log('Database synced!')
    // db.close() // only if using a version of node without `finally`
  })
  .then(() => {


    let seed = []
    let date = Date.now();
    let learned = ['I learned some things!', 'I learned some more things!!!']
    let coffee = ['yirgicheffe', 'Guatemala', 'Peru']
    let music = ['Zeppelin', 'Beatles', 'Jay Z']
    let coolThings = ['this article!', 'how to be a baller', 'setting up this apppp']

    for (let i=0; i<=10; i++) {
      seed.push(Day.create({
        date: date,
        learned: learned[i % learned.length],
        coffee: coffee[i % coffee.length],
        music: music[i % music.length]
      }))
    }
    return Promise.all(seed)
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => { // only if using a version of node WITH `finally`
    db.close()
  })
