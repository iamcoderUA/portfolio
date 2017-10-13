const mongoose = require('mongoose');

const Schema = mongoose.Schema

const workSchema = new Schema({
    name: String,
    tech: String,
    link: String,
    path: String,
})

mongoose.model('works', workSchema);
