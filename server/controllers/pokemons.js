require('../models/pokemon')
const mongoose = require('mongoose'),
    Pokemon = mongoose.model("Pokemon");

module.exports = {
   index: (req, res) => {
        Pokemon.find()
            .then(result => res.json({ results: result}))
            .catch(err => res.json({ errors: err.errors }));
    },
    show: (req, res) => {
        Pokemon.findById({_id: req.params.id})
        .then(result => res.json({ results: result}))
        .catch(err => res.json({ errors: err.errors }));
    },
    create: (req, res) =>{
        Pokemon.create(req.body)
            .then(result => res.json({ results: result }))
            .catch( err => res.json({ errors: err.errors }));
    },
    update: (req, res) => {
        Pokemon.findOneAndUpdate({_id: req.params.id},req.body,{runValidators: true,useFindAndModify: false})
            .then(result => res.json({ results: result }))
            .catch(err => res.json({ errors: err.errors }));
    },
    destroy: (req,res) => {
        Pokemon.findByIdAndDelete({_id:req.params.id})
            .then(result => res.json({ results: result }))
            .catch(err => res.json({ errors: err.errors }));
    },
}