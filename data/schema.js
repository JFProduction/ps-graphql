import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString
} from "graphql"

export const Schema = db => {
  let linkType = new GraphQLObjectType({
    name: "Link",
    fields: () => ({
      _id: { type: GraphQLString },
      title: { type: GraphQLString },
      url: { type: GraphQLString }
    })
  })

  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "getLinks",
      fields: () => ({
        links: {
          type: new GraphQLList(linkType),
          resolve: () => db.collection("links").find({}).toArray()
        },
      })
    }),

    mutation: new GraphQLObjectType({
      name: "Mutation",
      fields: () => ({
        incrementCounter: {
          type: GraphQLInt,
          resolve: () => ++counter
        }
      })
    })
  })

  return schema
}