import { createLogger, format, transports, Logger } from "winston";

export enum LogLevel {
    debug = "debug",
    info = "info",
    error = "error"
}

type MsgCallback = () => void;
type LogFunction = (message: string | MsgCallback, label?: string) => void;
type SetLogLevelFunc = (level: LogLevel) => void;

interface MyLoggerInterf {
    info: LogFunction;
    error: LogFunction;
    debug: LogFunction;
    setLogLevel: SetLogLevelFunc;
}

class MyLogger implements MyLoggerInterf {
    logLevel: LogLevel = LogLevel.info;
    logger = initLogger(this);

    info = (message: string | MsgCallback, label?: string) => {
        if (this.logger.isInfoEnabled()) {
            if (typeof message == 'function') {
                this.logger.info('', initMeta(label, message));
            }
            else {
                this.logger.info(message, initMeta(label));
            }
        }
    };

    error = (message: string | MsgCallback, label?: string) => {
        if (this.logger.isErrorEnabled()) {
            if (typeof message == 'function') {
                this.logger.error('', initMeta(label, message));
            }
            else {
                this.logger.error(message, initMeta(label));
            }
        }
    };

    debug = (message: string | MsgCallback, label?: string) => {
        if (this.logger.isDebugEnabled()) {
            if (typeof message == 'function') {
                this.logger.debug('', initMeta(label, message));
            }
            else {
                this.logger.debug(message, initMeta(label));
            }
        }
    };

    setLogLevel = (level: LogLevel) => {
        this.logLevel = level;
        this.logger = initLogger(this);
    };
}



function initLogger(myLogger: MyLogger): Logger {
    return createLogger({
        level: myLogger.logLevel,
        format: format.combine(
            format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            format.printf(info => {
                if (info.msgCallback && (typeof info.msgCallback == 'function')) {
                    info.message = info.msgCallback();
                }
                const labelStr = info.label ? `[${info.label}] ` : ''
                const level = ` ${info.level.toUpperCase()} `.slice(-8);
                return `${info.timestamp} ${level}${labelStr}${info.message}`
            })
        ),
        transports: [
            new transports.Console()
        ],
    });
}

function initMeta(label?: string, msgCallback?: MsgCallback) {
    const meta = {};
    if (label) {
        meta['label'] = label;
    }
    if (msgCallback) {
        meta['msgCallback'] = msgCallback;
    }
    return meta;
}

export let logger: MyLoggerInterf = new MyLogger();


