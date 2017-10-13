const express = require('express');

const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const addWork = require('../controllers/work');

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticle);
router.put('/blog/:id', ctrlBlog.editArticle);
router.delete('/blog/:id', ctrlBlog.deleteArticle);
router.post('/addWork', addWork.addWorkbd);

module.exports = router;
