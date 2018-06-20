const express = require('express')
const bodyParser = require('body-parser')
// const models = require('./models/index')

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))
// app.use(validator());

// ('./routes') is shorthand for ('./routes/index.js')
const timelineRoutes = require('./routes')
app.use(timelineRoutes)


const models = require('./models');

(async function dbSync() {
	try {
		await models.Day.sync() // {force: true}
	} catch (err) {
		next(err)
	}
})()


// handle 404 errors
app.use((req, res, next) => {
	// create new error
	const err = new Error('Not Found')
	// set status code for page you can't find
	err.status = 404
	// pass error into the next() function
	next(err)
})
// create custom error middleware
app.use( (err, req, res, next) => {
	// set locals/set error (err) property on res.locals.error
	res.locals.error = err
	// status sets the error of the code (500 is a general error that means the server hasn't responded as expected)
	res.status(err.status)
	// render the error template and give it access to the error (err) data
	// res.render('error', err);

})



app.listen(port,
	// '104.131.85.214',
	()  => {
  console.log(`The app is running on port ${port}`)
})

// const init = async () => {
//   //sync creates the table if it does not exist. alter true creates the tables and makes any changes to keep the modules in sync
// 	try {
// 	  await models.Day.sync() // {force: true}
// 	  app.listen(PORT, () => {
// 	    console.log(`Server is listening on port ${PORT}!`);
// 	  })
// 	} catch (err) {
// 		next(err)
// 	}
// }

// init();
