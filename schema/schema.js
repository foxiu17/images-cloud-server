const { buildSchema } = require('graphql');

module.exports = buildSchema(`

  type Image {
    _id: ID!
    file: String!
    url: String!
    date: String!
    uniq: String!
  }

  input ImageInput {
    file: String!
    url: String!
    date: String!
    uniq: String!
  }

  type RootQuery {
    images: [Image!]
  }

  type RootMutation {
    addImage(imageInput: ImageInput): Image
    removeImage(_id: ID!): Image
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
