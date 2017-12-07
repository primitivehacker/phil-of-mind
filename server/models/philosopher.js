const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhilosopherSchema = new Schema({
  name: { type: String },
  arguments: [{
    type: Schema.Types.ObjectId,
    ref: 'argument'
  }],
  doctorines: [{
    type: Schema.Types.ObjectId,
    ref: 'doctorine'
  }],
  opponents: [{
    type: Schema.Types.ObjectId,
    ref: 'opponent'
  }]
});

PhilosopherSchema.statics.addArguments = function(id, content) {
  const Argument = mongoose.model('argument');

  return this.findById(id)
    .then(philosopher => {
      const argument = new Argument({ content, philosopher })
      philosopher.arguments.push(argument)
      return Promise.all([argument.save(), philosopher.save()])
        .then(([argument, philosopher]) => philosopher);

    });
}

PhilosopherSchema.statics.findArguments = function(id) {
  return this.findById(id)
    .populate('arguments')
    .then(philosopher => philosopher.arguments);
}

mongoose.model('philosopher', PhilosopherSchema);
