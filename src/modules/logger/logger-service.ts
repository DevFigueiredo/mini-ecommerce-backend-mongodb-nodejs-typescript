import * as winston from 'winston'

import { LoggingWinston } from '@google-cloud/logging-winston'
export class Logger {
  private readonly logger: winston.Logger

  constructor () {
    const loggingWinston = new LoggingWinston()
    this.logger = winston.createLogger({
      level: 'debug',
      transports: [
        new winston.transports.Console(),
        // Add Stackdriver Logging
        loggingWinston
      ]
    })
  }

  debug (message): void {
    this.logger.debug(message)
  }

  info (message, meta?): void {
    meta ? this.logger.info(message, meta) : this.logger.info(message)
  }

  warn (message, meta?): void {
    meta ? this.logger.warn(message, meta) : this.logger.warn(message)
  }

  error (message, meta?): void {
    meta ? this.logger.error(message, meta) : this.logger.error(message)
  }
}
