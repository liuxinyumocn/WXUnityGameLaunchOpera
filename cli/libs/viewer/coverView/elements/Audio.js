"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../../interface/EmitterType");
const ExceptionType_1 = require("../../../interface/ExceptionType");
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = __importDefault(require("../../base/ElementBase"));
const ViewerBase_1 = __importDefault(require("../../base/ViewerBase"));
const env_1 = require("../env");
class Audio extends ElementBase_1.default {
    constructor(...args) {
        super(...args);
        this.progressTime = 0;
        this.onProgressToPlay = false;
        this.onWating = false;
        this.playAtTimes = [];
        this.watch = {
            playing: (value, oldValue) => {
                var _a, _b;
                if (!value.value) {
                    (_a = this.audio) === null || _a === void 0 ? void 0 : _a.pause();
                }
                else {
                    (_b = this.audio) === null || _b === void 0 ? void 0 : _b.play();
                }
            },
            seek: (value, oldValue) => {
                var _a;
                const time = Number(value.value.toString());
                (_a = this.audio) === null || _a === void 0 ? void 0 : _a.seek(time);
            },
            loop: (value, oldValue) => {
                if (this.audio) {
                    this.audio.loop = value.value;
                }
            },
        };
        this.nextPlayPosition = -1;
    }
    created() {
        const audio = env_1.wx.createInnerAudioContext();
        if (!audio) {
            const errInfo = {
                type: ExceptionType_1.ExceptionType.Audio,
                errmsg: `音频组件创建失败`,
            };
            ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.Exception, errInfo);
            return;
        }
        this.audio = audio;
        this.audio.onPlay(() => {
            const events = this.getEvents('onPlay');
            events.forEach((item) => {
                this.$emit(item);
            });
            this.onWating = false;
        });
        this.audio.onEnded(() => {
            const events = this.getEvents('onEnded');
            events.forEach((item) => {
                this.$emit(item);
            });
        });
        this.audio.onError(() => {
            const { url } = this.getParams(['url']);
            const errInfo = {
                type: ExceptionType_1.ExceptionType.Audio,
                errmsg: `音频URL:[${url.value.toString()}] 播放失败`,
            };
            ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.Exception, errInfo);
        });
        this.audio.onWaiting(() => {
            this.onWating = true;
        });
        this.audio.onTimeUpdate(() => {
            this.checkPlayAtTimes();
        });
        this.audio.onCanplay(() => {
            if (this.onProgressToPlay) {
                this.audio.play();
            }
        });
    }
    actived() {
        const { autoPlay, url, volume, loop } = this.getParams([
            'autoPlay',
            'url',
            'volume',
            'loop',
        ]);
        const events = this.getEvents('onPlayTimeAt');
        events.forEach((item) => {
            this.playAtTimes.push({
                eventHander: item,
                sec: item.params.sec.value,
            });
        });
        this.audio.src = url.value.toString();
        this.onProgressToPlay = autoPlay.value;
        this.audio.volume = volume.value;
        this.progress = 0;
        this.audio.loop = loop.value;
    }
    destory() {
        if (this.audio) {
            this.audio.destroy();
        }
    }
    get progress() {
        return this.progressTime;
    }
    set progress(value) {
        this.progressTime = value;
        if (this.progressTime > 0 && this.onProgressToPlay) {
            this.onProgressToPlay = false;
            this.nextPlayPosition = -1;
            this.audio.play();
        }
    }
    checkPlayAtTimes() {
        const currentTime = this.audio.currentTime;
        this.playAtTimes.forEach((item, index) => {
            const sec = item.sec;
            if (sec >= this.nextPlayPosition && sec < currentTime) {
                this.playAtTimes.splice(index, 1);
                this.$emit(item.eventHander);
            }
        });
        this.nextPlayPosition = currentTime;
    }
}
Audio.ListenerFrameType = FrameType_1.FrameType.createAudio;
exports.default = Audio;
//# sourceMappingURL=Audio.js.map