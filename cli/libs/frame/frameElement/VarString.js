"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = require("./FrameElementBase");
class VarString extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, VarString.ParamsStruct);
    }
    toString() {
        return this.getParam('value').value;
    }
}
VarString.ParamsStruct = {
    value: {
        type: ParamType_1.ParamInputType.String,
        desc: '全局字符串变量。',
    },
    globalName: {
        type: ParamType_1.ParamInputType.String,
        desc: '全局变量名，设置后可对其进行直接赋值。',
    },
};
exports.default = VarString;
//# sourceMappingURL=VarString.js.map