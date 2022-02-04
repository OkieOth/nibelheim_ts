import {logger, LogLevel}  from "../src/logger";

describe('Basic logger tests ...', () => {
    it('debug', () => {
        const caller = "logger.test.ts->basic-1"
        const testTxt = '--TESTTEXT--';
        logger.setLogLevel(LogLevel.debug);
        logger.debug("I am a debug ${input} text",caller);
        logger.info(() => { 
            console.log("Debug lambda was called :-)");
            return `I am a ${testTxt} :D`
        },caller);
        logger.error("Alarm, I am an error for what reason ever!!!","logger.test.ts->basic");
        logger.info("ping, i am still here","logger.test.ts->basic");
    });
    it('error', () => {
        const caller = "logger.test.ts->basic-2";
        const testTxt = 'TESTTEXT';
        logger.setLogLevel(LogLevel.error);
        logger.debug(() => { 
            console.log("Debug lambda was called :-/");
            return `I am a ${testTxt} :)`
        },caller);
        logger.debug("I am a debug ${input} text",caller);
        logger.error("Alarm, I am an error for what reason ever!!!","logger.test.ts->basic-2");
        logger.info("ping, i am still here","logger.test.ts->basic-2");
    });
});
