const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const Schema = require('./schema/schema');
const Resolvers = require('./resolvers/resolvers');

const app = express();

app.use(bodyParser.json());

app.use(
  '/api',
  graphqlHttp({
    schema: Schema,
    rootValue: Resolvers,
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@mongodbbase-r2irl.mongodb.net/${
      process.env.MONGO_DB
    }?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(8000);
  })
  .catch(err => {
    console.log(err);
  });
