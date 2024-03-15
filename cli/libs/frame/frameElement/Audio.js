"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
class Audio extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, Audio.ParamsStruct, Audio.EventsStruct);
    }
    pause() {
        return this.frame.getOperaData().createFrame(FrameType_1.FrameType.pauseAudio, {
            audio: this.frame,
        });
    }
    play() {
        return this.frame.getOperaData().createFrame(FrameType_1.FrameType.playAudio, {
            audio: this.frame,
        });
    }
}
Audio.ParamsStruct = {
    url: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '需要载入的音频资源地址。',
    },
    autoPlay: {
        type: ParamType_1.ParamInputType.Boolean,
        desc: '是否加载完毕后立即播放。',
    },
    playing: {
        type: ParamType_1.ParamInputType.Boolean,
        desc: '是否是播放中，修改该属性可以继续/暂停播放。',
        default: false,
    },
    seek: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '音频跳转到特定秒数，如果 < 0 则不跳转。',
        default: -1,
    },
    volume: {
        type: [ParamType_1.ParamInputType.Number],
        desc: '音频的音量，0～1之间的数值，默认为1。',
        default: 1,
    },
    loop: {
        type: ParamType_1.ParamInputType.Boolean,
        desc: '是否循环播放，默认不循环。',
        default: false,
    },
};
Audio.EventsStruct = {
    onPlayTimeAt: {
        params: {
            sec: {
                type: ParamType_1.ParamInputType.Number,
                desc: '监听的秒数。',
            },
        },
        desc: '当音频播放到特定秒数时触发下一帧。',
    },
    onEnded: {
        desc: '当音频播放结束后。',
    },
    onPlay: {
        desc: '开始播放',
    },
};
exports.default = Audio;
//# sourceMappingURL=Audio.js.map