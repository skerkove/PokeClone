const pokemon = require('../controllers/pokemons');
module.exports = (app) => {
    app.get('/api/pokemon', (req, res) => pokemon.index(req,res))
    app.get('/api/pokemon/:id', (req, res) => pokemon.show(req,res))
    app.post('/api/pokemon/create', (req, res) => pokemon.create(req,res)) 
    app.put('/api/pokemon/update/:id', (req, res) => pokemon.update(req,res))
    app.delete('/api/pokemon/delete/:id', (req, res) => pokemon.destroy(req,res))
}