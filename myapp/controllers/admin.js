const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const http = require('request');

const apiOptions = {
    server: 'http://localhost:3000',
};

module.exports.getAdmin = function (req, res) {
  res.render('admin/index', {
    title: 'Моя Админка',
    msgfile: req.query.msgfile,
    msgblog: req.query.msgblog,
  });
};

module.exports.uploadProject = function (req, res) {
  let form = new formidable.IncomingForm();
  let upload = 'public/img/content';
  let fileName = path.join(upload, 'ava_about.jpg');
  form.uploadDir = path.join(process.cwd(), upload);

  form.parse(req, function(err, fields, files) {
    if (err) {
      return res.redirect('/admin?msgfile=Не удалось загрузить картинку');
    }
    if (!fields.name) {
      fs.unlink(files.photo.path);
      return res.redirect('/admin?msgfile=Не указано описание картинки!');
    }

    fs.rename(files.photo.path, fileName, function (err) {
      if (err) {
        fs.unlink(fileName);
        fs.rename(files.photo.path, fileName);
      }

      res.redirect('/admin?msgfile=Картинка успешно загружена');
    });
  });
};

module.exports.addArticle = function (req, res) {
  const pathApi = '/api/blog';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: "POST",
    json: {
      title: req.body.title,
      date: req.body.date,
      text: req.body.text
    }
  };

  http(requestOptions, function (error, response, body) {
    res.redirect('/admin?msgblog=' + body.status);
  });
}