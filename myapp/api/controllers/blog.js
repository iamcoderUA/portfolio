const mongoose = require('mongoose');

module.exports.getArticles = function (req, res) {
    const article = [
        {
          "title": "Самое важное в SASS ",
          "date": "2017-07-12",
          "body": "Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям."

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
