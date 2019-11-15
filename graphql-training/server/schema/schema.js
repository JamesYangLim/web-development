const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author');

const { 
  GraphQLSchema,
  GraphQLObjectType, 
  GraphQLList,
  GraphQLID, 
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  // wrap fields in a function because function get execute after whole code has ran
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent,args){
        // return _.find(authors, { id: parent.authorId });
        return Author.findById(parent.authorId);
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent,args){
        // return _.filter(books, { authorId: parent.id });
        return Book.find({ authorId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent,args){
        // code to get datat from db / other source
        // console.log(typeof(args.id));
        // return _.find(books, { id: args.id });
        return Book.findById(args.id);
      }
    },

    books: {
      type: new GraphQLList(BookType),
      resolve(parent,args){
        // return books;
        return Book.find({}); // pass in empty object to get all books
      }
    },

    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent,args){
        // return _.find(authors, { id: args.id });
        return Author.findById(args.id);
      }
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent,args){
        // return authors;
        return Author.find({});
      }
    },

  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent,args){
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },

    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent,args){
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        return book.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});