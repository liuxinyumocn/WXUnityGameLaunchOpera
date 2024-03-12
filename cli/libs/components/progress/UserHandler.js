"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../interface/EmitterType");
const ProgressType_1 = require("../../interface/ProgressType");
const ComponentBase_1 = require("../ComponentBase");
class UserHandler {
    constructor(progress) {
        this.percentageValue = 0;
        this.styleValue = {
            position: ProgressType_1.Position.bottom,
            hidden: false,
            color: '#FFFFFF',
            backgroundColor: '#000000',
            height: 3,
        };
        this.progress = progress;
    }
    get percentage() {
        return this.percentageValue;
    }
    set percentage(value) {
        const newValue = typeof value === 'number'
            ? value < 0
                ? 0
                : value > 100
                    ? 100
                    : value
            : 0;
        if (newValue !== this.percentageValue) {
            this.percentageValue = newValue;
            this.refresh();
        }
    }
    get style() {
        return this.styleValue;
    }
    set style(value) {
        let changed = false;
        Object.keys(value).forEach((key) => {
            if (this.styleValue[key] !== value[key]) {
                this.styleValue[key] = value[key];
                changed = true;
            }
        });
        if (changed) {
            this.refresh();
        }
    }
    refresh() {
        ComponentBase_1.default.eventEmitter.emit(this.progress, EmitterType_1.ProgressCaseType.RefreshProgress);
    }
}
exports.default = UserHandler;
//# sourceMappingURL=UserHandler.js.map