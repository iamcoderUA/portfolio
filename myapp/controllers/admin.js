module.exports.getAdmin = function (req, res) {
  res.render('admin/index', { title: 'Моя Админка' });
};
