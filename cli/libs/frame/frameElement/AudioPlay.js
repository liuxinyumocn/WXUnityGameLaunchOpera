"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const FrameElementBase_1 = require("./FrameElementBase");
class AudioPlay extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, AudioPlay.ParamsStruct);
    }
    actived() {
        const audio = this.getParam('audio').value;
        audio.setParams({
            playing: true,
        });
    }
}
AudioPlay.ParamsStruct = {
    audio: {
        type: FrameType_1.FrameType.createAudio,
        desc: '需要继续播放的音频 Frame 实例。',
    },
};
exports.default = AudioPlay;
//# sourceMappingURL=AudioPlay.js.map