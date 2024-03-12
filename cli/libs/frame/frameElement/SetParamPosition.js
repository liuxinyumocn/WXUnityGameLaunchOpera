"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = require("./FrameElementBase");
const StructLib_1 = require("./StructLib");
class SetParamPosition extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, SetParamPosition.ParamsStruct);
    }
    actived() {
        var _a, _b, _c, _d, _e, _f;
        const frame = (_a = this.getParam('frame')) === null || _a === void 0 ? void 0 : _a.value;
        if (frame) {
            const top = (_b = this.getParam('top')) === null || _b === void 0 ? void 0 : _b.value;
            const bottom = (_c = this.getParam('bottom')) === null || _c === void 0 ? void 0 : _c.value;
            const left = (_d = this.getParam('left')) === null || _d === void 0 ? void 0 : _d.value;
            const right = (_e = this.getParam('right')) === null || _e === void 0 ? void 0 : _e.value;
            const visible = (_f = this.getParam('visible')) === null || _f === void 0 ? void 0 : _f.value;
            const param = {};
            if (top !== undefined) {
                param['top'] = top;
            }
            if (bottom !== undefined) {
                param['bottom'] = bottom;
            }
            if (left !== undefined) {
                param['left'] = left;
            }
            if (right !== undefined) {
                param['right'] = right;
            }
            if (visible !== undefined) {
                param['visible'] = visible;
            }
            if (Object.keys(param).length > 0) {
                frame.setParams(param);
            }
        }
    }
}
SetParamPosition.ParamsStruct = Object.assign(Object.assign({}, StructLib_1.PostionStruct), { frame: {
        type: ParamType_1.ParamInputType.Frame,
        desc: '被修改的 Frame 对象。',
    } });
exports.default = SetParamPosition;
//# sourceMappingURL=SetParamPosition.js.map