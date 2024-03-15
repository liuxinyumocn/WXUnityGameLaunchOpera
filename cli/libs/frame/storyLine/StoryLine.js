"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StoryLineBase_1 = __importDefault(require("./StoryLineBase"));
class StoryLine extends StoryLineBase_1.default {
    constructor(operaData, event) {
        super(operaData);
        this.relatedEvent = event;
    }
}
exports.default = StoryLine;
//# sourceMappingURL=StoryLine.js.map