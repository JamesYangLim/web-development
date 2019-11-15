const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema'); // define the schema of the graph
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// allow cross origin request
app.use(cors());


mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect(mongodbUri, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongo db');
})

app.use('/graphql', graphqlHTTP({
  // pass schema
  schema,
  graphiql: true
}));


app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});