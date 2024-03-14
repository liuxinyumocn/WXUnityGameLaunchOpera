"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
class AudioPause extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, AudioPause.ParamsStruct);
    }
    actived() {
        const audio = this.getParam('audio').value;
        audio.setParams({
            playing: false,
        });
    }
}
AudioPause.ParamsStruct = {
    audio: {
        type: FrameType_1.FrameType.createAudio,
        desc: '需要暂停的音频 Frame 实例。',
    },
};
exports.default = AudioPause;
//# sourceMappingURL=AudioPause.js.map