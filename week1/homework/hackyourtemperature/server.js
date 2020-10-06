const express = require('express')
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!')
})

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  if(typeof cityName === 'undefined') {
    res.status(400);
    res.end('Invalid Request');
  }
  res.end(cityName);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})