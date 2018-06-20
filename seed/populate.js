const { db, Day } = require('../models/index.js')


db.sync({force: true})
  .then(() => {
    console.log('Database synced!')
    // db.close() // only if using a version of node without `finally`
  })
  .then(() => {


    let seed = []
    let date = ['17 June, \'18', '18 June, \'18', '19 June, \'18'];
    let learned = ['Today I worked on Wes Montegomery\s "Four On Six." For anyone not familiar with the song, most of it is centered around G minor. I was having trouble playing over the series of ii V I\'s, so I worked on playing smoothly over that. On a web development note, I worked on getting an express to properly parse the request body to handle incoming json',
                  'Today, I learned all about JavaScript promises and asynchronicity. I also worked on West Coast Blues by Wes Montegomery. Implementing the bebop-ish concepts that I\'ve been working on in 3/4 was hard & definitely needs more work.',
                  'Today I brushed up on incorporating Sequelize into an Express.js application and how Express apps tie together on the back end.']
    let coffee = ['Metropolis: Rwanda Nyarusiza & Guatemala San Isidro, Archetype: Ethiopia Deri Kochoha',
                  'Guatemala San Isidro',
                  'Guatemala San Isidro']
    let music = ['Wes Montegomery "The Incredible Jazz Guitar Of Wes Montegomery"',
                  'Radiohead "Hail To The Thief"',
                  'David Bowie "The Rise And Fall Of Ziggy Stardust And The Spiders From Mars" & "Space Oddity"']
    let coolThingsIFound = [ ['A really great breakdown of how musical synthesis works'],
                            ['how to be a baller'],
                            ['setting up this apppp']]
    let coolThingsIFoundURL = [[],
                              [],
                              ['https://www.innovativesynthesis.com/basic-synthesis-part-1-%E2%80%93-oscillators/']]

    for (let i=0; i<date.length; i++) {
      seed.push(Day.create({
        date: date[i],
        whatILearned: learned[i],
        coffee: coffee[i],
        music: music[i],
        coolThingsIFound: coolThingsIFound[i],
        coolThingsIFoundURL: coolThingsIFoundURL[i]
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
