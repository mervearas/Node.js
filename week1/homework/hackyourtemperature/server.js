const express = require('express')
const app = express();
const port = 3001;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const axios = require('axios');
const API_KEY = require('./sources/keys.json').API_KEY;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  if(typeof cityName === 'undefined') {
    res.status(400);
    res.end('Invalid Request');
  }
  axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric`)
    .then(response => res.render('index',{weatherText: `${response.data.name} is ${Math.round(response.data.main.temp)} degree.`}))
    .catch((err) => res.render('index',{ weatherText: "City is not found!" }))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})