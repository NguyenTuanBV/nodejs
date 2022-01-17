const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Login = new Schema({
  username: { type: String, maxLength: 500 },
  password: { type: String, maxLength: 500 },
});

module.exports = mongoose.model('Login', Login);