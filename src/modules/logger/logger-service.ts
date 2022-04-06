import * as winston from 'winston'

import { LoggingWinston } from '@google-cloud/logging-winston'
export class Logger {
  private readonly logger: winston.Logger

  constructor () {
    const winstonLogConfig = {
      level: 'debug',
      transports: [new winston.transports.Console()]
    }

    Object.assign(winstonLogConfig, {
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        winston.format.printf(info => `[${info.timestamp}] [${info.level}]: ${info.message}`)
      )
    })

    winstonLogConfig.transports.push(new LoggingWinston() as any)

    this.logger = winston.createLogger(winstonLogConfig)
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
