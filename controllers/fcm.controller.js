const { logger } = require('../utils');

const pushFCM = (req, res) => {
  logger.log('info', `FCM Controller - Push Notif -> Input from Gateway : ${JSON.stringify(req.body)}`)
  res.status(200).json({
    success: 1,
    failure: 0,
    results: [
      {
        success: 'Sending notification to FCM'
      }
    ]
  })
}

module.exports = {
  pushFCM
};