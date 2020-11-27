const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const categoriasSchema = Schema({
    animal: {
      _id: mongoose.Schema.Types.ObjectId,
      type: String,
      required: true,
      unique: true,
      categoryId  : ObjectId,
    },
    
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });
  
mongoose.model('Categorias', categoriasSchema);

/*const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animalcategoriasSchema = Schema({
	//guardamos el Objetcid del modelo "categorias"
	categorias: {type: Schema.ObjectId, ref: 'categorias' },
	//guardamos el Objetcid del modelo "animal"
  animal: {type: Schema.ObjectId, ref: 'animal' },
  type: String,
  required: String,
  unique: String,

});

mongoose.model('Categorias', animalcategoriasSchema);*/