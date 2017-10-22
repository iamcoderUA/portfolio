const express = require('express');

const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const addWork = require('../controllers/work');
const addSkill = require('../controllers/skills');

router.get('/blog', ctrlBlog.getArticles);
router.post('/blog', ctrlBlog.createArticle);
router.put('/blog/:id', ctrlBlog.editArticle);
router.delete('/blog/:id', ctrlBlog.deleteArticle);

router.post('/addWork', addWork.addWorkbd);
router.get('/getSkills', addSkill.getSkillsDB);
router.post('/sendSkills', addSkill.createSkills);
module.exports = router;
