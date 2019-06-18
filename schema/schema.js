const { buildSchema } = require('graphql');

module.exports = buildSchema(`

  type Image {
    _id: ID!
    file: String!
    url: String!
    date: String!
  }

  input ImageInput {
    file: String!
    url: String!
    date: String!
  }

  type RootQuery {
    images: [Image!]
  }

  type RootMutation {
    addImage(imageInput: ImageInput): Image
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
