"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
class CheckPoint extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, CheckPoint.ParamsStruct, CheckPoint.EventsStruct);
    }
}
CheckPoint.ParamsStruct = {};
CheckPoint.EventsStruct = {};
exports.default = CheckPoint;
//# sourceMappingURL=CheckPoint.js.map