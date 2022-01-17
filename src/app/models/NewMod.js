const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const New = new Schema({
    title: { type: String, maxLength: 500 },
    description: { type: String, maxLength: 500 },
    image: { type: String, maxLength: 500 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('New', New);