import {buildSchema} from 'graphql';
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
const schema = buildSchema(`
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
      stocks: Stocks
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

  type Mutation {
      createStocks(input: StocksInput):Stocks
  }
`);

export default schema;