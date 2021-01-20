import {makeExecutableSchema, makeRemoteExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
const typeDefs=`
  type Stocks {
    id: ID
    symbol: String
    name: String
    lastprice: Float
    industry: String
    type: String
    exchange: String
    
  }


  type Query {
    getStock(id:ID):Stocks
  }

  input StocksInput{
    id: ID
    symbol: String
    name: String
    lastprice: Float
    industry: String
    type: String
    exchange: String
  }

  input ContactInput{
    firstName: String
    lastName: String
  }

  type Mutation {
      createStocks(input: StocksInput):Stocks
  }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});
export {schema};