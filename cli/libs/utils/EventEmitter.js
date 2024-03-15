"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventEmitter {
    constructor() {
        this.events = new WeakMap();
    }
    registerEvent(obj, callback) {
        if (this.events.has(obj)) {
            const funs = this.events.get(obj);
            if (funs.indexOf(callback) === -1) {
                funs.push(callback);
                this.events.set(obj, funs);
            }
        }
        else {
            this.events.set(obj, [callback]);
        }
    }
    emit(obj, ...args) {
        if (!obj)
            return;
        if (this.events.has(obj)) {
            const funs = this.events.get(obj);
            funs.forEach((item) => {
                item(...args);
            });
        }
    }
}
exports.default = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map