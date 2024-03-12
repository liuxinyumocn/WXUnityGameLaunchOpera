"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../../interface/FrameType");
const ParamType_1 = require("../../../interface/ParamType");
const ElementBase_1 = require("../../base/ElementBase");
const PositionTools_1 = require("../../utils/PositionTools");
class Animation extends ElementBase_1.default {
    constructor(...args) {
        super(...args);
        this.isDestory = false;
    }
    actived() {
        const frame = this.getParams('frame').frame;
        if (frame.type !== ParamType_1.ParamInputType.Frame)
            return;
        const viewerEl = this.viewer.getViewerElementByFrameBase(frame.value);
        if (!viewerEl) {
            return;
        }
        const pas = this.getParams(PositionTools_1.PositionAndSizeKeys);
        const animationParams = {};
        Object.keys(pas).forEach((key) => {
            if (pas[key] !== null) {
                animationParams[key] = pas[key];
            }
        });
        viewerEl
            .animation(animationParams, this.getParams(['duration', 'easing']))
            .then(() => {
            if (this.isDestory) {
                return;
            }
            const events = this.getEvents('onEnded');
            events.forEach((e) => {
                this.$emit(e);
            });
        });
    }
    destory() {
        this.isDestory = true;
    }
}
Animation.ListenerFrameType = FrameType_1.FrameType.createAnimationFunction;
exports.default = Animation;
//# sourceMappingURL=Animation.js.map