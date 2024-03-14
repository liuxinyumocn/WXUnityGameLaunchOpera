"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../interface/EmitterType");
const FrameBase_1 = __importDefault(require("../FrameBase"));
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
class End extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame);
    }
    actived() {
        FrameBase_1.default.eventEmitter.emit(this.frame, EmitterType_1.FrameBaseCaseType.End);
    }
}
exports.default = End;
//# sourceMappingURL=End.js.map