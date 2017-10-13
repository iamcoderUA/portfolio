const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

module.exports.addWorkbd = function(req, res) {
  const form = new formidable.IncomingForm()
  const upload = 'public/upload';
  let filename;  


  if (!fs.existsSync(upload)) {
    fs.mkdirSync(upload);
  }

  form.uploadDir = path.join(process.cwd(), upload)

  form.parse(req, function(error, fields, files) {
    filename = path.join(upload + files.photo.name)
    fs.rename(files.photo.path, filename, function(err) {
        if (err) {
            console.log(err)
            fs.unlink(filename)
            fs.rename(files.photo.path, filename)
        }
    })

    const Model = mongoose.model('works')
    const item = new Model({
      name: fields.name,
      tech: fields.tech,
      link: fields.link,
      path: 'upload' + files.photo.name,
    })

    item.save().then(items => {
        return res.status(200).json({status: 'Работы успешно добавлены'})
    }, err => {
        const error = Object
            .keys(err.error)
            .map(key => err.error[key].message)
            .join(', ')
        res.status(404).json({status: 'При добавлении произошла ошибка'})
    })
  })
}