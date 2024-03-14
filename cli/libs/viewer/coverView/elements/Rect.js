"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../../interface/FrameType");
const ElementBase_1 = __importDefault(require("../../base/ElementBase"));
const UIXml_1 = __importDefault(require("../UIXml"));
const DOM_1 = __importDefault(require("../DOM"));
const PositionTools_1 = require("../../utils/PositionTools");
const OnEventTools_1 = require("../../utils/OnEventTools");
class Rect extends ElementBase_1.default {
    constructor(...args) {
        super(...args);
        this.first = true;
        this.watch = {
            visible: (value, oldValue) => {
                this.view.style.hidden = !value.value;
            },
        };
    }
    created() {
        this.uid = UIXml_1.default.addClickRect();
    }
    domMounted() {
        this.view = DOM_1.default.getHandler(this.uid);
        this.view.style.hidden = true;
        this.view.style.backgroundColor = '#00000000';
        this.view.on('click', (event) => {
            if (!(0, OnEventTools_1.isValidClick)(event)) {
                return;
            }
            const events = this.getEvents('onClick');
            let keep = false;
            events.forEach((item) => {
                this.$emit(item);
                if (item.keep) {
                    keep = true;
                }
            });
            if (!keep)
                this.view.style.hidden = true;
        });
    }
    updated(params) {
        if ((0, PositionTools_1.isPositionAndSizeChange)(params)) {
            this.updatePositionAndSize();
        }
    }
    actived() {
        this.updatePositionAndSize();
    }
    updatePositionAndSize() {
        const positionAndSize = (0, PositionTools_1.calPositionAndSizeByParams)(this.getParams(PositionTools_1.PositionAndSizeKeys));
        Object.keys(positionAndSize).forEach((key) => {
            this.view.style[key] = positionAndSize[key];
        });
        const { visible, color } = this.getParams(['visible', 'color']);
        this.view.style.hidden = !(visible === null || visible === void 0 ? void 0 : visible.value);
        if (color === null || color === void 0 ? void 0 : color.value)
            this.view.style.backgroundColor = color.value;
    }
}
Rect.ListenerFrameType = FrameType_1.FrameType.createRect;
exports.default = Rect;
//# sourceMappingURL=Rect.js.map