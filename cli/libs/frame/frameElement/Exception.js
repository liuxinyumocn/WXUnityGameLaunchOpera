"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParamType_1 = require("../../interface/ParamType");
const FrameElementBase_1 = __importDefault(require("./FrameElementBase"));
class Exception extends FrameElementBase_1.default {
    constructor(frame) {
        super(frame, Exception.ParamsStruct, Exception.EventsStruct);
    }
}
Exception.ParamsStruct = {
    throw: {
        type: ParamType_1.ParamInputType.Boolean,
        desc: '是否将捕获到的异常继续向上抛出，将被 director.onErr() 捕获。',
        default: true,
    },
};
Exception.EventsStruct = {
    catch: {
        desc: '当捕获到异常时。',
    },
};
exports.default = Exception;
//# sourceMappingURL=Exception.js.map