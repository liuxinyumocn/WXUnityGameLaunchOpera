"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
const StructLib_1 = require("./StructLib");
class Image extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, Image.ParamsStruct, Image.EventsStruct);
    }
    visible(value) {
        return this.frame.getOperaData().createFrame(FrameType_1.FrameType.setParamPosition, {
            visible: !!value,
            frame: this.frame,
        });
    }
}
Image.ParamsStruct = Object.assign(Object.assign(Object.assign({}, StructLib_1.PostionStruct), StructLib_1.SizeStruct), { url: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '需要载入的图像资源地址。',
    } });
Image.EventsStruct = {
    onClick: {
        desc: '当图片被点击。',
    },
};
exports.default = Image;
//# sourceMappingURL=Image.js.map