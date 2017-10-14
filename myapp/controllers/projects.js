const nodemailer = require('nodemailer');
const config = require('../config.json');

module.exports.getProjects = function (req, res) {
  res.render('pages/projects', {
    title: 'Мои работы',
    msg: req.query.msg,
  });
};

module.exports.sendEmail = function(req, res) {

//требуем наличия имени, обратной почты и текста
  if (!req.body.name || !req.body.email || !req.body.text) {
    //если что-либо не указано - сообщаем об этом
    res.status(404).json({message: 'Не все поля заполнены'});    
  }

//инициализируем модуль для отправки писем и указываем данные из конфига
  const transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text: req
      .body
      .text
      .trim()
      .slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
  };

  //отправляем почту
  transporter.sendMail(mailOptions, function (error, info) {
    //если есть ошибки при отправке - сообщаем об этом
    if (error) {
    res.status(500).json({message: 'Произошла ошибка на сервере'});    
    }
    res.status(301).json({message: 'Письмо успешно отправлено'});
  });
};
