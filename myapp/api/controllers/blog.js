const mongoose = require('mongoose');

module.exports.getArticles = function (req, res) {
    const article = [
        {
          "title": "Facebook выпустил Yarn 1.0",
          "date": "2017-10-27",
          "body": "Спустя 11 месяцев после открытия кода Facebook представил первый стабильный релиз пакетного менеджера Yarn 1.0, предназначенного для управления зависимостями в проектах на языке JavaScript и вобравшего в себя опыт и лучшие идеи менеджеров зависимостей Bundler, Cargo и npm. Yarn позиционируется как замена npm, способная работать с репозиториями npm, но обеспечивающая более высокий уровень производительности, надёжности и безопасности. Основными причинами создания нового пакетного менеджера стала невозможность избавления npm от ряда проблем, а также этому способствовала его очень медленная работа и архитектурные проблемы с безопасностью. Основными возможностями Yarn являются: режим работы в offline, стойкость к проблемам в сети, наличие стабильного JavaScript API и так далее. Так что те, кто не пробовал еще использовать Yarn как альтернативу NPM - настоятельно рекомендую",
        }
      ];

      const blog = mongoose.model('blog');
      blog.find().then(items => {
        if (!items.length) {
          res
            .status(200)
            .json({articles: article});
        } else {
          res
            .status(200)
            .json({articles: items});
        }
      })

};

module.exports.createArticle = function (req, res) {
    //создаем новую запись блога и передаем в нее поля из формы
    const Model = mongoose.model('blog');
  
    let item = new Model({
      title: req.body.title,
      date: new Date(req.body.date),
      body: req.body.text
    });
      //сохраняем запись в базе
  item.save().then(item => {
    return res
      .status(201)
      .json({status: 'Запись успешно добавлена'});
  }, err => {
    //если есть ошибки, то получаем их список и так же передаем
    const error = Object
      .keys(err.errors)
      .map(key => err.errors[key].message)
      .join(', ');

    //обрабатываем  и отправляем
    res
      .status(404)
      .json({
        status: 'При добавление записи произошла ошибка: ' + error
      });
  });
};

module.exports.editArticle = function (req, res) {
    const id = req.params.id;
    
    let data = {
    title: req.body.title,
    date: new Date(req.body.date),
    body: req.body.text,
    };

    const Model = mongoose.model('blog');

    Model
        .findByIdAndUpdate(id, {$set: data} )
        .then((item) => {
            if (!!item) {
            res
                .status(200)
                .json({status: 'Запись успешно обновлена'});
            } else {
            res
                .status(404)
                .json({status: 'Запись в БД не обнаружена'});
            }
        })
        .catch((err) => {
            res
            .status(404)
            .json({
                status: 'При обновлении записи произошла ошибка: ' + err
            });
        });
};

module.exports.deleteArticle = function (req, res) {
    const id = req.params.id;
    const Model = mongoose.model('blog');
  
    Model
      .findByIdAndRemove(id)
      .then((item) => {
        if (!!item) {
          res.status(200).json({status: 'Запись успешно удалена'});
        } else {
          res.status(404).json({status: 'Запись в БД не обнаружена'});
        }
      }, (err) => {
        res.status(404).json({
          status: 'При удалении записи произошла ошибка: ' + err
        });
      });
};
