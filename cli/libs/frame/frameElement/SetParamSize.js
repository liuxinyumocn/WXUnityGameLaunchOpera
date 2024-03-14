"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
const StructLib_1 = require("./StructLib");
class SetParamSize extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, SetParamSize.ParamsStruct);
    }
    actived() {
        var _a, _b, _c, _d, _e, _f;
        const frame = (_a = this.getParam('frame')) === null || _a === void 0 ? void 0 : _a.value;
        if (frame) {
            const width = (_b = this.getParam('width')) === null || _b === void 0 ? void 0 : _b.value;
            const height = (_c = this.getParam('height')) === null || _c === void 0 ? void 0 : _c.value;
            const scaleHeight = (_d = this.getParam('scaleHeight')) === null || _d === void 0 ? void 0 : _d.value;
            const scaleWidth = (_e = this.getParam('scaleWidth')) === null || _e === void 0 ? void 0 : _e.value;
            const opacity = (_f = this.getParam('opacity')) === null || _f === void 0 ? void 0 : _f.value;
            if (width !== undefined) {
                frame.setParams({
                    width,
                });
            }
            if (height !== undefined) {
                frame.setParams({
                    height,
                });
            }
            if (scaleHeight !== undefined) {
                frame.setParams({
                    scaleHeight,
                });
            }
            if (scaleWidth !== undefined) {
                frame.setParams({
                    scaleWidth,
                });
            }
            if (opacity !== undefined) {
                frame.setParams({
                    opacity,
                });
            }
        }
    }
}
SetParamSize.ParamsStruct = Object.assign(Object.assign({}, StructLib_1.SizeStruct), { frame: {
        type: ParamType_1.ParamInputType.Frame,
        desc: '被修改的 Frame 对象。',
    } });
exports.default = SetParamSize;
//# sourceMappingURL=SetParamSize.js.map