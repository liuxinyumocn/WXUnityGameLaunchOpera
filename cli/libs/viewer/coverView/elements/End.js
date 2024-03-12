"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../../interface/EmitterType");
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = require("../../base/ElementBase");
const ViewerBase_1 = require("../../base/ViewerBase");
class End extends ElementBase_1.default {
    constructor(...args) {
        super(...args);
    }
    actived() {
        ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerElementBaseCaseType.DestoryView);
        console.log(`lac-opera end.`);
    }
}
End.ListenerFrameType = FrameType_1.FrameType.end;
exports.default = End;
//# sourceMappingURL=End.js.map