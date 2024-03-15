"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
class VideoPause extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, VideoPause.ParamsStruct);
    }
    actived() {
        const video = this.getParam('video').value;
        video.setParams({
            playing: false,
        });
    }
}
VideoPause.ParamsStruct = {
    video: {
        type: FrameType_1.FrameType.createVideo,
        desc: '需要暂停的视频 Frame 实例。',
    },
};
exports.default = VideoPause;
//# sourceMappingURL=VideoPause.js.map