const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const food = new Schema({
    title: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 255 },
    image: { type: String, maxlength: 255 },
    link: { type: String, maxlength: 255 },
});

module.exports = mongoose.model('food', food);
