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
  GraphQLString
} = graphql;

/*
// dummy data
var books = [
  { id: '1', name: 'Name of the Wind',    genre: 'Fantasy', authorId: '1' },
  { id: '2', name: 'The Final Empire',    genre: 'Fantasy', authorId: '2' },
  { id: '3', name: 'The Long Earth',      genre: 'Sci-Fi',  authorId: '3' },
  { id: '4', name: 'The Hero of Ages',    genre: 'Fantasy', authorId: '2' },
  { id: '5', name: 'The Colour of Magic', genre: 'Fantasy', authorId: '3' },
  { id: '6', name: 'The Light Fantastic', genre: 'Fantasy', authorId: '3' },
  
];

var authors = [
  { id: '1', name: 'Patrick Rothfuss',  age: 44 },
  { id: '2', name: 'Brandon Sanderson', age: 42 },
  { id: '3', name: 'Terry Pratchett',   age: 66 }
];
*/

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
        // console.log(parent);
        // return _.find(authors, { id: parent.authorId });
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
      }
    },

    books: {
      type: new GraphQLList(BookType),
      resolve(parent,args){
        // return books;
      }
    },

    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent,args){
        // return _.find(authors, { id: args.id });
      }
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent,args){
        // return authors;
      }
    },

  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});


/*
Graphql query string example:

{
  book {
    name
    genre
  }
}
{
  // query with id
  book(id:'123') {
    name
    genre
  }
}

*/