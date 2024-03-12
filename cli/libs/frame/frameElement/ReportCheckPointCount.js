"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = require("./FrameElementBase");
class ReportCheckPointCount extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, ReportCheckPointCount.ParamsStruct, ReportCheckPointCount.EventsStruct);
    }
}
ReportCheckPointCount.ParamsStruct = {
    num: {
        type: ParamType_1.ParamInputType.Number,
        desc: '累计创建的检查点个数。',
    },
};
ReportCheckPointCount.EventsStruct = {};
exports.default = ReportCheckPointCount;
//# sourceMappingURL=ReportCheckPointCount.js.map