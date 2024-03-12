"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParamType_1 = require("../../interface/ParamType");
var PostionStruct = {
    Top: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.None],
        desc: '屏幕顶边距离。'
    },
    Bottom: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.None],
        desc: '屏幕底边距离，若同时设定Top Bottom 则该属性失效。'
    },
    Left: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.None],
        desc: '屏幕左边距离。'
    },
    Right: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.None],
        desc: '屏幕右边距离，若同时设定 Left Right 则该属性失效。'
    },
};
exports.default = PostionStruct;
//# sourceMappingURL=PositonStructBase.js.map