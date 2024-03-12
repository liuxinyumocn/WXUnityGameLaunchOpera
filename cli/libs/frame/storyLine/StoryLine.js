"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StoryLineBase_1 = require("./StoryLineBase");
class StoryLine extends StoryLineBase_1.default {
    constructor(operaData, event) {
        super(operaData);
        this.relatedEvent = event;
    }
}
exports.default = StoryLine;
//# sourceMappingURL=StoryLine.js.map