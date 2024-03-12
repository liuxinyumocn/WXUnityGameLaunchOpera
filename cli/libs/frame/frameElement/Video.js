"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = require("./FrameElementBase");
const StructLib_1 = require("./StructLib");
class Video extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, Video.ParamsStruct, Video.EventsStruct);
    }
    pause() {
        return this.frame.getOperaData().createFrame(FrameType_1.FrameType.pauseVide, {
            video: this.frame,
        });
    }
    play() {
        return this.frame.getOperaData().createFrame(FrameType_1.FrameType.playVideo, {
            video: this.frame,
        });
    }
    visible(value) {
        return this.frame.getOperaData().createFrame(FrameType_1.FrameType.setParamPosition, {
            visible: !!value,
            frame: this.frame,
        });
    }
}
Video.ParamsStruct = Object.assign(Object.assign(Object.assign({}, StructLib_1.PostionStruct), StructLib_1.SizeStruct), { url: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '需要载入的视频资源地址。',
    }, autoPlay: {
        type: ParamType_1.ParamInputType.Boolean,
        desc: '是否加载完毕后立即播放。',
    }, playing: {
        type: ParamType_1.ParamInputType.Boolean,
        desc: '是否是播放中。',
        default: false,
    }, objectFit: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '视频的缩放模式，可选值：fill、contain、cover',
        default: 'cover',
    }, seek: {
        type: [ParamType_1.ParamInputType.Number, ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '视频跳转到特定秒数，如果 < 0 则不跳转。',
        default: -1,
    }, loop: {
        type: ParamType_1.ParamInputType.Boolean,
        desc: '是否循环播放。',
        default: false,
    } });
Video.EventsStruct = {
    onPlayTimeAt: {
        params: {
            sec: {
                type: ParamType_1.ParamInputType.Number,
                desc: '监听的秒数。',
            },
        },
        desc: '当视频播放到特定秒数时触发下一帧。',
    },
    onEnded: {
        desc: '当视频播放结束后。',
    },
    onPlay: {
        desc: '开始播放。',
    },
};
exports.default = Video;
//# sourceMappingURL=Video.js.map