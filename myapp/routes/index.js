const express = require('express');

const router = express.Router();

const isAdmin = (req, res, next) => {
    // если в сессии текущего пользователя есть пометка о том, что он является
    // администратором
    if (req.session.isAdmin) {
      // то всё хорошо :)
      return next();
    }
    // если нет, то перебросить пользователя на главную страницу сайта
  };

const ctrlHome = require('../controllers/homepage');
const ctrlProjects = require('../controllers/projects');
const ctrlAbout = require('../controllers/about');
const ctrlBlog = require('../controllers/blog');
const ctrlAdmin = require('../controllers/admin');


/* GET home page. */
router.get('/', ctrlHome.getIndex);

router.get('/projects', ctrlProjects.getProjects);
router.get('/getWork', ctrlProjects.getWork);
router.post('/contact', ctrlProjects.sendEmail);

router.get('/about', ctrlAbout.getAbout);
router.get('/blog', ctrlBlog.getBlog);

router.get('/admin', isAdmin, ctrlAdmin.getAdmin);
router.post('/articles', isAdmin, ctrlAdmin.addArticle);

module.exports = router;
