const html = require("html-template-tag")
const layout = require("./layout")

module.exports = () => html `   <html lang="en">
    <head>
      <title>TimeLine</title>

      <link href="/stylesheets/style.css" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css">
        <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed" rel="stylesheet">
    </head>
    <body>

      <nav id="large-navigation">
        <ul id="#nav-items">
          <li class="nav-icon"><a href="#top-of-page">Home</a></li>
          <li class="nav-icon"><a href="#music">Music</a></li>
          <li class="nav-icon"><a href="#development">Development</a></li>
          <li class="nav-icon"><a href="#contact">Contact</a></li>

          <li class="social-icon"><a href="https://github.com/veryspry" target="_blank" > <i class="fa fa-github"></i></a></li>
          <li class="social-icon"><a href="https://twitter.com/MattEhlinger" target="_blank" > <i class="fa fa-twitter"></i></a></li>
          <li class="social-icon" ><a href="https://www.instagram.com/veryspry/" target="_blank" > <i class="fa fa-instagram"></i></a></li>
        </ul>
      </nav>

      <div class="header-div"></div>

      <div class="day-wrapper">
        <div class="date-div">
          <h5 class="date">17 June, 2018</h5>
        </div>

        <h3 class="learned">Today I learned all about JavaScript Promises and how we can you async/await, callbacks & .try()/.catch() all for many of the same things</h3>

        <h3 class="coffee">☕ yirgicheffe ☕</h3>
        <h3 class="music">🎶 Zeppelin IV, Watch the Throne - Jay-Z & Kanye 🎶</h3>
        <h3 class="cool-things">Things I found today: <a href="http://google.com">google</a> </h3>
      </div>

      <div class="day-seperator">
      </div>

      <div class="day-wrapper">

        <h5 class="date">17 June, 2018</h5>
        <h3 class="coffee">yirgicheffe</h3>
        <h3 class="music">Zeppelin</h3>
        <h3 class="cool-things">Here are some dope resources: <a href="http://google.com">google</a> </h3>
        <h3 class="learned">Today I learned all about JavaScript Promises and how we can you async/await, callbacks & .try()/.catch() all for many of the same things</h3>

      </div>
      <div class="day-wrapper">

        <h5 class="date">17 June, 2018</h5>
        <h3 class="coffee">yirgicheffe</h3>
        <h3 class="music">Zeppelin</h3>
        <h3 class="cool-things">Here are some dope resources: <a href="http://google.com">google</a> </h3>
        <h3 class="learned">Today I learned all about JavaScript Promises and how we can you async/await, callbacks & .try()/.catch() all for many of the same things</h3>

      </div>
      <div class="day-wrapper">

        <h5 class="date">17 June, 2018</h5>
        <h3 class="coffee">yirgicheffe</h3>
        <h3 class="music">Zeppelin</h3>
        <h3 class="cool-things">Here are some dope resources: <a href="http://google.com">google</a> </h3>
        <h3 class="learned">Today I learned all about JavaScript Promises and how we can you async/await, callbacks & .try()/.catch() all for many of the same things</h3>

      </div>

    </body>

  `
