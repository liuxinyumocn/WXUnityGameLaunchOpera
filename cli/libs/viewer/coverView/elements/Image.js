"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = require("../../base/ElementBase");
const OnEventTools_1 = require("../../utils/OnEventTools");
const PositionTools_1 = require("../../utils/PositionTools");
const DOM_1 = require("../DOM");
const UIXml_1 = require("../UIXml");
const env_1 = require("../env");
class Image extends ElementBase_1.default {
    constructor(...args) {
        super(...args);
        this.watch = {
            visible: (value, oldValue) => {
                this.image.style.hidden = !value.value;
            },
        };
    }
    created() {
        const { url } = this.getParams(['url']);
        this.uid = UIXml_1.default.addImage(url.value.toString());
    }
    domMounted() {
        this.image = DOM_1.default.getHandler(this.uid);
        this.updatePositionAndSize();
        this.image.style.hidden = true;
        this.image.on('click', (event) => {
            if (!(0, OnEventTools_1.isValidClick)(event)) {
                return;
            }
            const events = this.getEvents('onClick');
            events.forEach((item) => {
                this.$emit(item);
            });
        });
    }
    actived() {
        this.updatePositionAndSize();
    }
    updated(params) {
        if ((0, PositionTools_1.isPositionAndSizeChange)(params)) {
            this.updatePositionAndSize();
        }
    }
    animation(style, animationInfo) {
        return new Promise((resolve, reject) => {
            var _a, _b, _c, _d;
            const { visible } = this.getParams('visible');
            if (!visible.value) {
                reject();
                return;
            }
            const nowParams = this.getParams(PositionTools_1.PositionAndSizeKeys);
            const positionNow = (0, PositionTools_1.calPositionAndSizeByParams)(nowParams);
            const positionNew = (0, PositionTools_1.calPositionAndSizeByParams)(nowParams, style);
            const diff = {};
            Object.keys(positionNew).forEach((key) => {
                if (positionNew[key] !== positionNow[key]) {
                    diff[key] = positionNew[key];
                }
            });
            const duration = Number((_b = (_a = animationInfo === null || animationInfo === void 0 ? void 0 : animationInfo.duration) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString());
            const easing = (_d = (_c = animationInfo === null || animationInfo === void 0 ? void 0 : animationInfo.easing) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.toString();
            if (env_1.env.isDevtools) {
                setTimeout(() => {
                    this.frame.setParams(positionNew);
                    this.updatePositionAndSize();
                    resolve(true);
                }, duration);
            }
            else {
                setTimeout(() => {
                    const animation = Object.assign({ easing,
                        duration }, diff);
                    this.image.animate(animation).then(() => {
                        this.frame.setParams(positionNew);
                        this.updatePositionAndSize();
                        resolve(true);
                    });
                }, env_1.env.isIOS ? 30 : 1);
            }
        });
    }
    updatePositionAndSize() {
        const positionAndSize = (0, PositionTools_1.calPositionAndSizeByParams)(this.getParams(PositionTools_1.PositionAndSizeKeys));
        Object.keys(positionAndSize).forEach((key) => {
            this.image.style[key] = positionAndSize[key];
        });
        const { visible } = this.getParams('visible');
        this.image.style.hidden = !(visible === null || visible === void 0 ? void 0 : visible.value);
    }
}
Image.ListenerFrameType = FrameType_1.FrameType.createImage;
exports.default = Image;
//# sourceMappingURL=Image.js.map