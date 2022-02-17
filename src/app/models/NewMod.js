const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const New = new Schema({
    title: { type: String, maxLength: 500, required: true },
    description: { type: String, maxLength: 500, required: true },
    image: { type: String, maxLength: 500, required: true },
    slug: { type: String, slug: "title", unique: true},
},{
    timestamps: true,
});

module.exports = mongoose.model('New', New);