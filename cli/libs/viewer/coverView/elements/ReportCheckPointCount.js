"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../../interface/EmitterType");
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = __importDefault(require("../../base/ElementBase"));
const ViewerBase_1 = __importDefault(require("../../base/ViewerBase"));
class ReportCheckPointCount extends ElementBase_1.default {
    constructor(...args) {
        super(...args);
    }
    actived() {
        var _a;
        const num = ((_a = this.getParams('num')) === null || _a === void 0 ? void 0 : _a.num.value.toString()) || '0';
        ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.ReportCheckPointCount, num);
    }
}
ReportCheckPointCount.ListenerFrameType = FrameType_1.FrameType.reportCheckPointCount;
exports.default = ReportCheckPointCount;
//# sourceMappingURL=ReportCheckPointCount.js.map