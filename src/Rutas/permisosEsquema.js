const express = require('express');
const mongoose = require('mongoose');
const Exigir = require('../Medio/exigir');

const list = mongoose.model('Category');

const router = express.Router();

router.use(Exigir);

router.get ('/esquema', async (req, res) => {
    const categoria = await list.find({ userId: req.user._id });

    res.send(categoria);
});

router.post('/esquema', async (req, res) => {
    const { category } = req.body;

    if (!category ) {
        return res.status(422).send({ error: 'Must provide categoria' });
    }

    try {
        const lista= new list({ category, userId: req.user._id });
        await lista.save();
        res.send(lista);
    } catch (err) {
        res.status(422).send({ error: 'Invalid categoria' });
    }
});

module.exports = router;