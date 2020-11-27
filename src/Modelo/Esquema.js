const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
category: { 
type: String,
required: true,
unique: true,
}, 
userId: {
    type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
}

});

mongoose.model('Category', categorySchema);

/*const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  category: {
  type: String,
  required: String,
  unique: String,
  },

userId: {
    type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
}
  
});

mongoose.model('Category', categorySchema);*/