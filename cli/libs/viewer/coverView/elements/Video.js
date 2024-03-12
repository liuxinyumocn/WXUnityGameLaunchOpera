"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../../interface/EmitterType");
const ExceptionType_1 = require("../../../interface/ExceptionType");
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = require("../../base/ElementBase");
const ViewerBase_1 = require("../../base/ViewerBase");
const PositionTools_1 = require("../../utils/PositionTools");
const DOM_1 = require("../DOM");
const UIXml_1 = require("../UIXml");
class Video extends ElementBase_1.default {
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
                    (_a = this.video) === null || _a === void 0 ? void 0 : _a.pause();
                }
                else {
                    (_b = this.video) === null || _b === void 0 ? void 0 : _b.play();
                }
            },
            visible: (value, oldValue) => {
                if (this.video)
                    this.video.style.hidden = !value.value;
            },
            objectFit: (value, oldValue) => {
                if (this.video)
                    this.video.objectFit = value.value;
            },
            seek: (value, oldValue) => {
                var _a;
                const time = Number(value.value.toString());
                (_a = this.video) === null || _a === void 0 ? void 0 : _a.seek(time);
            },
            loop: (value, oldValue) => {
                if (this.video)
                    this.video.loop = !!value.value;
            },
        };
        this.nextPlayPosition = -1;
    }
    created() {
        this.uid = UIXml_1.default.addVideo();
    }
    domMounted() {
        this.video = DOM_1.default.getHandler(this.uid);
        this.video.muted = false;
        this.updatePositionAndSize();
        this.video.style.hidden = true;
        this.video.onEnded(() => {
            const events = this.getEvents('onEnded');
            events.forEach((item) => {
                this.$emit(item);
            });
        });
        this.video.onError((e) => {
            const { url } = this.getParams(['url']);
            const errInfo = {
                type: ExceptionType_1.ExceptionType.Video,
                errmsg: `视频URL:[${url.value.toString()}] 播放失败`,
            };
            ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.Exception, errInfo);
        });
        this.video.onProgress(() => {
            var _a;
            this.progress++;
            if (this.onWating) {
                (_a = this.video) === null || _a === void 0 ? void 0 : _a.play();
            }
        });
        this.video.onPlay(() => {
            const events = this.getEvents('onPlay');
            events.forEach((item) => {
                this.$emit(item);
            });
            this.onWating = false;
        });
        this.video.onWaiting(() => {
            this.onWating = true;
        });
        this.video.onTimeUpdate((res) => {
            this.checkPlayAtTimes(res);
        });
    }
    actived() {
        this.updatePositionAndSize();
        const { autoPlay, url, objectFit, loop } = this.getParams([
            'autoPlay',
            'url',
            'objectFit',
            'loop',
        ]);
        const events = this.getEvents('onPlayTimeAt');
        events.forEach((item) => {
            this.playAtTimes.push({
                eventHander: item,
                sec: item.params.sec.value,
            });
        });
        this.video.loop = !!loop.value;
        this.video.style.hidden = false;
        this.video.objectFit = objectFit;
        this.progress = 0;
        this.onProgressToPlay = autoPlay.value;
        this.video.src = url.value.toString();
    }
    updated(params) {
        if ((0, PositionTools_1.isPositionAndSizeChange)(params)) {
            this.updatePositionAndSize();
        }
    }
    updatePositionAndSize() {
        const positionAndSize = (0, PositionTools_1.calPositionAndSizeByParams)(this.getParams(PositionTools_1.PositionAndSizeKeys));
        Object.keys(positionAndSize).forEach((key) => {
            this.video.style[key] = positionAndSize[key];
        });
        const { visible } = this.getParams('visible');
        this.video.style.hidden = !visible;
    }
    checkPlayAtTimes(res) {
        this.playAtTimes.forEach((item, index) => {
            const sec = item.sec;
            if (sec >= this.nextPlayPosition && sec < res.position) {
                this.playAtTimes.splice(index, 1);
                this.$emit(item.eventHander);
            }
        });
        this.nextPlayPosition = res.position;
    }
    get progress() {
        return this.progressTime;
    }
    set progress(value) {
        this.progressTime = value;
        if (this.progressTime > 0 && this.onProgressToPlay) {
            this.onProgressToPlay = false;
            this.nextPlayPosition = -1;
            this.video.play();
        }
    }
}
Video.ListenerFrameType = FrameType_1.FrameType.createVideo;
exports.default = Video;
//# sourceMappingURL=Video.js.map