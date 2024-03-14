"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = __importDefault(require("../../base/ElementBase"));
class SetTimeout extends ElementBase_1.default {
    constructor(...args) {
        super(...args);
        this.watch = {
            cancel: (value, oldValue) => {
                if (this.timeoutHandler && value.value) {
                    clearTimeout(this.timeoutHandler);
                    this.timeoutHandler = null;
                    const events = this.getEvents('onCancel');
                    events.forEach((item) => {
                        this.$emit(item);
                    });
                }
            },
        };
    }
    actived() {
        const { timeout, cancel } = this.getParams(['timeout', 'cancel']);
        if (cancel.value)
            return;
        const timeout2 = Math.max(Number(timeout.value.toString()) || 0, 1);
        this.timeoutHandler = setTimeout(() => {
            this.timeoutHandler = null;
            const events = this.getEvents('onEnded');
            events.forEach((item) => {
                this.$emit(item);
            });
        }, timeout2);
    }
}
SetTimeout.ListenerFrameType = FrameType_1.FrameType.setTimeout;
exports.default = SetTimeout;
//# sourceMappingURL=SetTimeout.js.map