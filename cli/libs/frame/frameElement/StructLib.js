"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationStruct = exports.SizeStruct = exports.PostionStruct = void 0;
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
exports.PostionStruct = {
    top: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.None, ParamType_1.ParamInputType.Percent],
        desc: '屏幕顶边距离。',
    },
    bottom: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.None, ParamType_1.ParamInputType.Percent],
        desc: '屏幕底边距离，若同时设定Top Bottom 则该属性失效。',
    },
    left: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.None, ParamType_1.ParamInputType.Percent],
        desc: '屏幕左边距离。',
    },
    right: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.None, ParamType_1.ParamInputType.Percent],
        desc: '屏幕右边距离，若同时设定 Left Right 则该属性失效。',
    },
    visible: {
        type: ParamType_1.ParamInputType.Boolean,
        desc: '是否可见。',
        default: true,
    },
};
exports.SizeStruct = {
    width: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.Percent],
        desc: '宽度。',
    },
    height: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.Percent],
        desc: '高度。',
    },
    scaleHeight: {
        type: ParamType_1.ParamInputType.Number,
        desc: '缩放值，标准为1。',
    },
    scaleWidth: {
        type: ParamType_1.ParamInputType.Number,
        desc: '缩放值，标准为1。',
    },
    opacity: {
        type: ParamType_1.ParamInputType.Number,
        desc: '透明度，1 为不透明，0 为完全透明。',
    },
};
exports.AnimationStruct = {
    duration: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '动画持续时间，ms。',
    },
    easing: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '曲率函数名。',
    },
};
//# sourceMappingURL=StructLib.js.map