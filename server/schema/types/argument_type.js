const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Argument = mongoose.model('argument');

const ArgumentType = new GraphQLObjectType({
  name:  'ArgumentType',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    philosopher: {
      type: require('./philosopher_type'),
      resolve(parentValue) {
        return Argument.findById(parentValue).populate('philosopher')
          .then(argument => {
            console.log(argument)
            return argument.philosopher
          });
      }
    },
    doctorine: {
      type: require('./doctorine_type'),
      resolve(parentValue) {
        return Argument.findById(parentValue).populate('doctorine')
          .then(argument => {
            console.log(argument)
            return argument.doctorine
          });
      }
    }

  })
});

module.exports = ArgumentType;
