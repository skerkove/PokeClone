const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
     number: {
          type: Number,
          required: [true, "yall need a number?"]
     },
     name: {
          type: String,
          required: [true, "yall need a name?"]
     },
     image: {
          type: String,
          required: [true, "yall need a image?"]
     },

}, { timestamps: true });

mongoose.model("Pokemon", PokemonSchema)