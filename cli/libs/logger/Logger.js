"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = require("../utils/EventEmitter");
class Logger {
    constructor() {
        this.startTimestamp = 0;
        this.registerLoggerEventListener();
    }
    registerLoggerEventListener() {
        Logger.eventEmitter.registerEvent(this, (type, ...args) => {
        });
    }
}
Logger.eventEmitter = new EventEmitter_1.default();
exports.default = Logger;
//# sourceMappingURL=Logger.js.map