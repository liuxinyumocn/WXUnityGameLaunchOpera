"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../../interface/EmitterType");
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = require("../../base/ElementBase");
const ViewerBase_1 = require("../../base/ViewerBase");
class CheckPoint extends ElementBase_1.default {
    constructor(...args) {
        super(...args);
    }
    actived() {
        ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.CheckPoint);
    }
}
CheckPoint.ListenerFrameType = FrameType_1.FrameType.checkPoint;
exports.default = CheckPoint;
//# sourceMappingURL=CheckPoint.js.map