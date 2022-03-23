const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

// [GET] /news
// router.get('/', newsController.index);

router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;