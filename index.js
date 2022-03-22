const express = require("express");
const app = express();
const port = 3030;

const cors = require("cors");
const morgan = require("morgan");

// SETUP MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const data = require("./data");
const { get } = require("express/lib/response");

console.log(data)

app.get('/users', (req, res) => {
  res.json({users: data.users})
})

app.get('/users/:id', (req, res) => {

  console.log(req.params)

  const id = parseInt(req.params.id)

  const user = data.users.find( user => user.id === id)
  res.send({user: user})
})

app.post('/users', (req, res) => {
  console.log('in post USERS, body is:', req.body)

  const newUser = {
    id: data.users.length+1,
    email: req.body.email
  }
  
  data.users.push(newUser)
  res.json({users: newUser})
})

//GET /films
app.get('/films', (req, res) => {
  res.json({films: data.films})
})

app.get('/films/:id', (req, res) => {
  console.log(req.params)

  const id = parseInt(req.params.id)

  const film = data.films.find( film => film.id === id)
  res.send({film: film})
})



app.post('/films', (req, res) => {
  console.log('in post FILMS, body is:', req.body)

  const newFilm = {
    id: data.films.length+1,
    title: req.body.title,
    director: req.body.director
    // title: req.body.title,
    // type: req.body.type,
    // author: req.body.author
  }
  
  data.films.push(newFilm)
  res.json({film: newFilm})
})





//GET /books
app.get('/books', (req, res) => {
  res.json({books: data.books})
})


app.get('/books/:id', (req, res) => {
  console.log(req.params)

  const id = parseInt(req.params.id)

  const book = data.books.find( book => book.id === id)
  res.send({book: book})
})



app.post('/books', (req, res) => {
  console.log('in post BOOKS, body is:', req.body)

  const newBook = {
    id: data.books.length+1,
    title: req.body.title,
    type: req.body.type,
    author: req.body.author
  }
  
  data.books.push(newBook)
  res.json({book: newBook})
})






/* START SERVER */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
