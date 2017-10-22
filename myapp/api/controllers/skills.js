const mongoose = require('mongoose');

module.exports.getSkillsDB = function(req, res) {
    const defaultSkills = [
        {
            id : 1,
            name : "HTML5, CSS3",
            percents : 90,
            type : 1,
          },
          {
            id : 2,
            name : "Git",
            percents : 70,
            type : 2,
          },
            {
            id : 3,
            name : "PHP",
            percents : 10,
            type : 3,
            },
        ]

    const modelSkills = mongoose.model('skills');
    
    modelSkills.find().then(items => {
        if (!items.length) {
            res.status(200).json(defaultSkills);
        } else {
            res.status(200).json(items);            
        }
    });
}

module.exports.createSkills = function(req, res) {
    const data = req.body;
    const Skills = mongoose.model('skills');
    Skills.collection.remove();
    for (let i = 0; i < data.length; i++) {
        let item = new Skills({
            name: data[i].name,
            percents: data[i].percents,
            type: data[i].type,
        })
        item.save().then(item => {
            return res.status(200).json({ status: "Записи успешно добавленны" })
        }, err => {
            const error = Object
              .keys(err.errors)
              .map(key => err.errors[key].message)
              .join(', ')
            res.status(404).json({ status: 'При добавлении произошла ошибка ' + error })
        })
    }
}