"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = require("./FrameElementBase");
class SetParam extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, SetParam.ParamsStruct, SetParam.EventsStruct);
    }
    actived() {
        var _a, _b;
        const frame = (_a = this.getParam('frame')) === null || _a === void 0 ? void 0 : _a.value;
        if (frame) {
            const paramName = (_b = this.getParam('param')) === null || _b === void 0 ? void 0 : _b.value.toString();
            const valueInfo = this.getParam('value');
            let value;
            if (valueInfo &&
                (valueInfo.type === ParamType_1.ParamInputType.Boolean ||
                    valueInfo.type === ParamType_1.ParamInputType.Number ||
                    valueInfo.type === ParamType_1.ParamInputType.String)) {
                value = valueInfo.value;
            }
            else {
                value = valueInfo === null || valueInfo === void 0 ? void 0 : valueInfo.value.toString();
            }
            const param = {};
            param[paramName] = value;
            frame.setParams(param);
        }
    }
}
SetParam.ParamsStruct = {
    frame: {
        type: ParamType_1.ParamInputType.Frame,
        desc: '被修改的 Frame 对象。',
    },
    param: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '被设置的属性名。',
    },
    value: {
        type: [
            ParamType_1.ParamInputType.String,
            FrameType_1.FrameType.var,
            ParamType_1.ParamInputType.Boolean,
            ParamType_1.ParamInputType.Number,
        ],
        desc: '被设置的属性值。',
    },
};
SetParam.EventsStruct = {};
exports.default = SetParam;
//# sourceMappingURL=SetParam.js.map