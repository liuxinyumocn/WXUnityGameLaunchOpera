"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = __importDefault(require("../../base/ElementBase"));
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