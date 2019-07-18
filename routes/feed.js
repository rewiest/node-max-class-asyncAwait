const express = require('express');

const feedController = require('../controllers/feed');
const feedValidator = require('../validators/feed');

const router = express.Router();

router.get('/posts', feedController.getPosts);

router.get('/post/:postId', feedController.getPost);

router.post('/post', feedValidator.createPost, feedController.createPost);

router.put('/post/:postId', feedValidator.updatePost, feedController.updatePost);

module.exports = router;
