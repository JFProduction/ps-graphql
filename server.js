import express from 'express';
import { MongoClient } from 'mongodb';
import GraphQLHTTP from "express-graphql"
import { Schema } from "./data/schema"

let app = express();

app.use(function(_, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let db
MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
  if (err) throw err
  db = client.db("ps-graphql")

  app.use("/graphql", GraphQLHTTP({
    schema: Schema(db),
    graphiql: true
  }))
  
  app.listen(3003, () => console.log("listening on port 3003"))
})