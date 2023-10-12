const { logger } = require("../utils")

const oauthHW = (req, res) => {
  logger.log('info', `HW Controller - Oauth -> Input from Gateway : ${JSON.stringify(req.body)}`);
  res.status(200).json({
    access_token: 'thisisfakeaccesstoken',
    expires_in: 3600,
    token_type: 'Bearer'
  });
}

const pushHW = (req, res) => {
  logger.log('info', `HW Controller - Push Notif -> Input from Gateway : ${JSON.stringify(req.body)}`);
  res.status(200).json({
    code: '80000000',
    msg: 'Success'
  });
}

module.exports = {
  oauthHW,
  pushHW,
};