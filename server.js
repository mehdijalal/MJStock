import express from 'express';
import schema from './schema/schema';
//const { graphqlHTTP } = require('express-graphql');
import {graphqlHTTP}  from 'express-graphql';


 
//var root = { hello: () => 'Hello world!' };
//-----it should come from database---------------//
var root = { stocks: ()=>{
   return {
    "id": 2333344,
    "symbol": "AAL",
    "name": "American Airlines Group, Inc.",
    "lastprice": 15.97,
    "industry": "Industrials",
    "type": "Stocks",
    "exchange": "NMS"
   }
    
}};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));