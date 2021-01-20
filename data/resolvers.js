const stocksDatabase = {};

class Stocks {
    constructor (id, {symbol, name, lastprice, industry, type, exchange}){
        this.id = id;
        this.symbol = symbol;
        this.name = name;
        this.lastprice = lastprice;
        this.industry = industry;
        this.type = type;
        this.exchange = exchange;
    }
}

//---resolver map----------------//
export const resolvers = {

    Query: {
        getStock: ({input})=>{
            return new Stocks(id,stocksDatabase[id]);
        },
    },
    Mutation: {
        createStocks: ({input})=>{
            let id = require('crypto').randomBytes(10).toString('hex');
            stocksDatabase[id]=input;
            return new Stocks(id, input);
        },
    },
};

export default resolvers;