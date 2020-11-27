const express = require('express');
const mongoose = require('mongoose');
const Exigir = require('../Medio/exigir');

const list = mongoose.model('Categorias');

const router = express.Router();

router.use(Exigir);

router.get('/category', async (req, res) => {
    const categoria = await list.find({ userId: req.user._id });
    
    res.send(categoria);
});

/*router.get('/category', async (req, res) => {

const categorias = await list.find().populate({patch: 'animal'});
		if(err){
			res.status(422).send({message:'Error de conexión '});
		}else{
			if(!categorias){
				res.status(422).send({message: 'No existe el animal'});
			}else{
				categorias.populate(categorias, {path: 'categorias'}, (err) => {
					
					if(err){
						res.status(422).send({message: 'Error en la peticiona '});
					}else{
						res.status(422).send(categorias);
					}
				});
			}
		}
	});*/

router.post('/category', async (req, res) => {
    const { animal } = req.body;

    if (!animal) {
        return res.status(422).send({ error: 'Must provide animal ' });
    }

    try {
        const lista= new list({ animal, userId: req.user._id });
        await lista.save();
        res.send(lista);
    } catch (err) {
        res.status(422).send({ error: 'Invalid animal' });
    }
});

module.exports = router;