"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../../interface/EmitterType");
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = __importDefault(require("../../base/ElementBase"));
const ViewerBase_1 = __importDefault(require("../../base/ViewerBase"));
class Report extends ElementBase_1.default {
    constructor(...args) {
        super(...args);
    }
    actived() {
        var _a, _b, _c;
        const { sceneId, dimension, metric } = this.getParams([
            'sceneId',
            'dimension',
            'metric',
        ]);
        ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.Report, {
            sceneId: Number((_a = sceneId === null || sceneId === void 0 ? void 0 : sceneId.value) === null || _a === void 0 ? void 0 : _a.toString()),
            dimension: (_b = dimension === null || dimension === void 0 ? void 0 : dimension.value) === null || _b === void 0 ? void 0 : _b.toString(),
            metric: (_c = metric === null || metric === void 0 ? void 0 : metric.value) === null || _c === void 0 ? void 0 : _c.toString(),
        });
    }
}
Report.ListenerFrameType = FrameType_1.FrameType.report;
exports.default = Report;
//# sourceMappingURL=Report.js.map