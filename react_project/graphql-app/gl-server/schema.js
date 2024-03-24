const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

const products = require("./db.json");

const RatingSchema = new GraphQLObjectType({
  name: "RatingSchema",
  fields: () => {
    return {
      rate: { type: GraphQLFloat },
      count: { type: GraphQLInt },
    };
  },
});

const ProductSchema = new GraphQLObjectType({
  name: "ProductSchema",
  fields: () => {
    return {
      id: { type: GraphQLInt },
      title: { type: GraphQLString },
      price: { type: GraphQLFloat },
      description: { type: GraphQLString },
      category: { type: GraphQLString },
      image: { type: GraphQLString },
      rating: { type: RatingSchema },
    };
  },
});

const Query = {
  getProducts: {
    type: new GraphQLList(ProductSchema),
    args: { count: { type: GraphQLInt } },
    resolve: (resolver, args) => {
      // data =  SELECT * FROM products LIMIT 0,count
      // products.find().limit(count)
      let _list = products.slice(0, args.count);
      return _list;
    },
  },
};
const Queries = new GraphQLObjectType({
  name: "Queries",
  fields: Query,
});

const schema = new GraphQLSchema({
  query: Queries,
});

// export default schema

// common js way
module.exports = schema;
