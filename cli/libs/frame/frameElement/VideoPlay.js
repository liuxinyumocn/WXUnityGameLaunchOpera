"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const FrameElementBase_1 = require("./FrameElementBase");
class VideoPlay extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, VideoPlay.ParamsStruct);
    }
    actived() {
        const video = this.getParam('video').value;
        video.setParams({
            playing: true,
        });
    }
}
VideoPlay.ParamsStruct = {
    video: {
        type: FrameType_1.FrameType.createVideo,
        desc: '需要继续播放的视频 Frame 实例。',
    },
};
exports.default = VideoPlay;
//# sourceMappingURL=VideoPlay.js.map