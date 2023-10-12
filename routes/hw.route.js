const express = require('express');
const router = express.Router();
const { hwController } = require('../controllers')

router.post("/oauth", hwController.oauthHW);
router.post("/push-notif", hwController.pushHW);

module.exports = router;
