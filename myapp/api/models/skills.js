const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SkillsSchema = new Schema({
    name: String,
    percents: Number,
    type: Number,
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('skills', SkillsSchema);
