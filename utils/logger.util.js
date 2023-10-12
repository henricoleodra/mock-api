const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.sss A' }),
    winston.format.json(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `[${timestamp}] - [${level.toUpperCase()}] - ${message}`
    }),
    winston.format.colorize(),
  ),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    })
  ],
  exitOnError: false
});

module.exports = logger;
module.exports.stream = {
  write: (message, encoding) => {
    logger.info(message);
  }
};