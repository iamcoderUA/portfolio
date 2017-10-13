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