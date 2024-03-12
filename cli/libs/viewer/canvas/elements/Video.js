"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = require("../../base/ElementBase");
class Video extends ElementBase_1.default {
    constructor() {
        super(...arguments);
        this.watch = {
            playing: (value, oldValue) => {
                return false;
            },
        };
    }
    updated(params) { }
}
Video.ListenerFrameType = FrameType_1.FrameType.createVideo;
exports.default = Video;
//# sourceMappingURL=Video.js.map