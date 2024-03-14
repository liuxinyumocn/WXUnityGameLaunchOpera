"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../../interface/FrameType");
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
class If extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, If.ParamsStruct, If.EventsStruct);
    }
    actived() {
        var _a, _b;
        const valueA = this.getParam('valueA');
        const valueB = this.getParam('valueB');
        const isTrue = ((_a = valueA === null || valueA === void 0 ? void 0 : valueA.value) === null || _a === void 0 ? void 0 : _a.toString()) === ((_b = valueB === null || valueB === void 0 ? void 0 : valueB.value) === null || _b === void 0 ? void 0 : _b.toString());
        const events = this.getEvents();
        const eventName = isTrue ? 'isTrue' : 'isFalse';
        events.forEach((event) => {
            if (event.event === eventName) {
                this.$emitEvent(event);
            }
        });
    }
}
If.ParamsStruct = {
    valueA: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '被比较的值或变量A。',
    },
    valueB: {
        type: [ParamType_1.ParamInputType.String, FrameType_1.FrameType.var],
        desc: '被比较的值或变量B。',
    },
};
If.EventsStruct = {
    isTrue: {
        desc: '当 valueA == valueB 时执行的事件。',
    },
    isFalse: {
        desc: '当 valueA != valueB 时执行的事件。',
    },
};
exports.default = If;
//# sourceMappingURL=If.js.map