const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema'); // define the schema of the graph
const cors = require('cors');

const app = express();

// allow cross origin request
app.use(cors());

const dbUsername = process.env.MONGO_DB_USER;
const dbPassword = process.env.MONGO_DB_PASS;
const mongodbUri = 'mongodb+srv://'+dbUsername+':'+dbPassword+'@jcluster-vxxig.mongodb.net/test';
// const mongodbUri = 'mongodb+srv://'+dbUsername+':'+dbPassword+'@jcluster-vxxig.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true });
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