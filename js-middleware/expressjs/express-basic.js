const express = require('express')
const app = express()
const port = 3000

///////////////////// Basic routing
/*
Run node express-basic.js then in web browser or Postman, go to localhost:3000
PUT or DELETE requests go to localhost:3000/user
*/
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => res.send('Got a POST request'))
app.put('/user', (req, res) => res.send('Got a PUT request at /user'))
app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'))

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})

///////////////////// Serving static files in Express

/*
funcion signature:
  express.static(root, [options])

Run node express-basic.js and go to uri http://localhost:3000/index.pug
*/

app.use(express.static('public'))

///////////////////// Handle 404 responses

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})

///////////////////// Error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
