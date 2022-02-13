const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 500, require: true},
    description: {type: String, maxLength: 500},
    image: {type: String, maxLength: 500},
    videoId: {type: String, maxLength: 500, required: true},
    level: {type: String, maxLength: 500},
    slug: { type: String, slug: 'name', unique: true}
},{
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);