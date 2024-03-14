"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
const StructLib_1 = require("./StructLib");
class Rect extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, Rect.ParamsStruct, Rect.EventsStruct);
    }
}
Rect.ParamsStruct = Object.assign(Object.assign(Object.assign({}, StructLib_1.PostionStruct), StructLib_1.SizeStruct), { color: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '颜色，默认为透明。',
    } });
Rect.EventsStruct = {
    onClick: {
        desc: '当区域被点击。',
    },
};
exports.default = Rect;
//# sourceMappingURL=Rect.js.map