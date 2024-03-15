"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
class SetParamSizeAndPosition extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, [FrameType_1.FrameType.setParamSize, FrameType_1.FrameType.setParamPosition]);
    }
    actived() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const frame = (_a = this.getParam('frame')) === null || _a === void 0 ? void 0 : _a.value;
        if (frame) {
            const top = (_b = this.getParam('top')) === null || _b === void 0 ? void 0 : _b.value;
            const bottom = (_c = this.getParam('bottom')) === null || _c === void 0 ? void 0 : _c.value;
            const left = (_d = this.getParam('left')) === null || _d === void 0 ? void 0 : _d.value;
            const right = (_e = this.getParam('right')) === null || _e === void 0 ? void 0 : _e.value;
            const visible = (_f = this.getParam('visible')) === null || _f === void 0 ? void 0 : _f.value;
            const width = (_g = this.getParam('width')) === null || _g === void 0 ? void 0 : _g.value;
            const opacity = (_h = this.getParam('opacity')) === null || _h === void 0 ? void 0 : _h.value;
            const scaleWidth = (_j = this.getParam('scaleWidth')) === null || _j === void 0 ? void 0 : _j.value;
            const scaleHeight = (_k = this.getParam('scaleHeight')) === null || _k === void 0 ? void 0 : _k.value;
            const height = (_l = this.getParam('height')) === null || _l === void 0 ? void 0 : _l.value;
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
            if (width !== undefined) {
                param['width'] = width;
            }
            if (height !== undefined) {
                param['height'] = height;
            }
            if (scaleHeight !== undefined) {
                param['scaleHeight'] = scaleHeight;
            }
            if (scaleWidth !== undefined) {
                param['scaleWidth'] = scaleWidth;
            }
            if (opacity !== undefined) {
                param['opacity'] = opacity;
            }
            if (Object.keys(param).length > 0) {
                frame.setParams(param);
            }
        }
    }
}
exports.default = SetParamSizeAndPosition;
//# sourceMappingURL=SetParamSizeAndPosition.js.map