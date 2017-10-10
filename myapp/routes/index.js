const express = require('express');

const router = express.Router();

const ctrlHome = require('../controllers/homepage');
const ctrlProjects = require('../controllers/projects');
const ctrlAbout = require('../controllers/about');
const ctrlBlog = require('../controllers/blog');
const ctrlAdmin = require('../controllers/admin');


/* GET home page. */
router.get('/', ctrlHome.getIndex);
router.get('/projects', ctrlProjects.getProjects);
router.post('/contact', ctrlProjects.sendEmail);
router.get('/about', ctrlAbout.getAbout);
router.get('/blog', ctrlBlog.getBlog);
router.get('/admin', ctrlAdmin.getAdmin);

module.exports = router;
