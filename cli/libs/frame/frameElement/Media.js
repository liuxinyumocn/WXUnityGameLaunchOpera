"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
class Media extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, Media.ParamsStruct);
    }
}
Media.ParamsStruct = {
    device: {
        type: ParamType_1.ParamInputType.Selecet,
        desc: '需要查询的设备类型，目前可查询 phone、pad。',
        selectItems: ['phone', 'pad'],
    },
    var: {
        type: FrameType_1.FrameType.var,
        desc: '当前运行设备满足 Device 条件时被设定的变量(关键帧)。',
    },
    value: {
        type: ParamType_1.ParamInputType.String,
        desc: '变量(关键帧)设定值。',
    },
};
exports.default = Media;
//# sourceMappingURL=Media.js.map