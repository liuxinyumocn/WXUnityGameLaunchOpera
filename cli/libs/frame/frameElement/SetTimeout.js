"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = require("./FrameElementBase");
class SetTimeout extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, SetTimeout.ParamsStruct, SetTimeout.EventsStruct);
    }
    cancel() {
        return this.frame.getOperaData().createFrame(FrameType_1.FrameType.setParam, {
            frame: this,
            param: 'cancel',
            value: true,
        });
    }
}
SetTimeout.ParamsStruct = {
    timeout: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var, ParamType_1.ParamInputType.Number],
        desc: '延迟时长，单位 ms。',
    },
    cancel: {
        type: [ParamType_1.ParamInputType.Boolean],
        desc: '提前取消执行。',
        default: false,
    },
};
SetTimeout.EventsStruct = {
    onEnded: {
        desc: '当延迟结束后。',
    },
    onCancel: {
        desc: '当主动取消时。',
    },
};
exports.default = SetTimeout;
//# sourceMappingURL=SetTimeout.js.map