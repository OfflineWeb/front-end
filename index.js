const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

const publicDirectoryPath = path.join(__dirname, '/public');
app.use(express.static(publicDirectoryPath));

const bootstrapPath = path.join(__dirname, '/node_modules/bootstrap/dist/');

app.use('/js', express.static(bootstrapPath + '/js'));
app.use('/css', express.static(bootstrapPath + '/css'));

const partialPath = path.join(__dirname, '/partials');
hbs.registerPartials(partialPath);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Weather app',
    name: 'Udita'
  })
})

app.get('/search', (req, res) => {
  res.send('result', {
    results: [
      {id: 1234, title: "Page title", description: "Page description"},
      {id: 4567, title: "Page title 2", description: "Page description 2"},
    ]
  })
})

app.get('page', (req, res) => {
  res.render('page', {
    id: 1234,
    title: "Page title",
    content: "lot of things"
  })
})

app.listen(8080, () => {
  console.log('Server running at 8080');
})

//module.export = app
