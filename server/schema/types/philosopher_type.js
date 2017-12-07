const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const ArgumentType = require('./argument_type');
const DoctorineType = require('./doctorine_type');
const ArgumentType = require('./argument_type');
const Philosopher = mongoose.model('philosopher');

const PhilosopherType = new GraphQLObjectType({
  name: 'PhilosopherType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    doctorine: {
      type: new GraphQLList(DoctorineType),
      resolve(parentValue) {
        return Philosopher.findDoctorine(parentValue.id);
      }
    }
    argument: {
      type: new GraphQLList(ArgumentType),
      resolve(parentValue) {
        return Philosopher.findArguments(parentValue.id);
      }
    }
    opponent: {
      type: new GraphQLList(OpponentType),
      resolve(parentValue) {
        return Philosopher.findOpponents(parentValue.id);
      }
    }
  })
});

const

module.export = PhilosopherType;
