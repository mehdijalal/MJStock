import express from 'express';
import schema from './data/schema';
//const { graphqlHTTP } = require('express-graphql');
import {graphqlHTTP}  from 'express-graphql';
import {schema} from './data/schema';

 
//var root = { hello: () => 'Hello world!' };
//-----it should come from database---------------//
// var root = { stocks: ()=>{
//    return {
//     "id": 2333344,
//     "symbol": "AAL",
//     "name": "American Airlines Group, Inc.",
//     "lastprice": 15.97,
//     "industry": "Industrials",
//     "type": "Stocks",
//     "exchange": "NMS"
//    }
    
// }};
 
app.get('/',(req,res)=>{
  res.send('----Hi Graphql works great--------');
})
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4500, () => console.log('Now browse to localhost:4500/graphql'));