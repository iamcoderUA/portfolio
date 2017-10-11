const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticle);
router.put('/blog/:id', ctrlBlog.editArticle);
router.delete('/blog/:id', ctrlBlog.deleteArticle);

// router.get('/avatar', ctrlAvatar.getAvatar);
// router.post('/avatar', ctrlAvatar.setAvatar);


module.exports = router;
