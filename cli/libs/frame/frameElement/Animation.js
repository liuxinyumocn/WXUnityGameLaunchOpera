"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
const StructLib_1 = require("./StructLib");
class Animation extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, Animation.ParamsStruct, Animation.EventsStruct);
    }
}
Animation.ParamsStruct = Object.assign(Object.assign(Object.assign(Object.assign({}, StructLib_1.PostionStruct), StructLib_1.SizeStruct), StructLib_1.AnimationStruct), { frame: {
        type: [FrameType_1.FrameType.createImage],
        desc: '需要变动的Frame对象。',
    }, playing: {
        type: ParamType_1.ParamInputType.Boolean,
        desc: '是否正在执行动画。',
    } });
Animation.EventsStruct = {
    onEnded: {
        desc: '当动画结束后。',
    },
};
exports.default = Animation;
//# sourceMappingURL=Animation.js.map