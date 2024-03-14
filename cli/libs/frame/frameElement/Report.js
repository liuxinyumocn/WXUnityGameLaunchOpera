"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
class Report extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, Report.ParamsStruct, Report.EventsStruct);
    }
}
Report.ParamsStruct = {
    sceneId: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '自定义上报场景ID。',
    },
    dimension: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '自定义上报维度JSON字符串，请阅读上报说明填写。',
    },
    metric: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '自定义上报指标JSON字符串，请阅读上报说明填写。',
    },
};
Report.EventsStruct = {};
exports.default = Report;
//# sourceMappingURL=Report.js.map