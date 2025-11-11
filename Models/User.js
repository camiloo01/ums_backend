const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  usuario: {type: String, required: true, unique: true, trim: true},
  email: {type: String, required: true, unique: true, trim: true},
  contraseña: {type: String, required: true, trim: true},
  tipo: {type: mongoose.Schema.Types.ObjectId, ref: 'Rol'},
  estado: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo',
  },
  recoveryCode: {
    code: {
        type: String,
        default: null
    },
    expiresAt: {
        type: Date,
        default: null
    }
}
})

const Usuario = mongoose.model('Usuario', userSchema);

module.exports = Usuario;