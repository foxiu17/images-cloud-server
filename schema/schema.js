const { buildSchema } = require('graphql');

module.exports = buildSchema(`

  type Image {
    _id: ID!
    file: String!
    url: String!
    date: String!
    uniq: String!
  }

  type FavoriteImage {
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
    favoriteImages: [FavoriteImage]
  }

  type RootMutation {
    addImage(imageInput: ImageInput): Image
    removeImage(uniq: String!): Image
    addFavoriteImage(imageInput: ImageInput): FavoriteImage
    removeFavoriteImage(uniq: String!): FavoriteImage
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
