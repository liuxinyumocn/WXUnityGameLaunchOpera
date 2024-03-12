"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../interface/EmitterType");
const operaDirector_1 = require("../operaDirector");
const EventEmitter_1 = require("../utils/EventEmitter");
class ComponentBase {
    constructor(director) {
        this.director = director;
    }
    get handler() {
        return this.userHandler;
    }
    created(operaData) { }
    $update() {
        operaDirector_1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.UpdateParams);
    }
}
ComponentBase.componentName = '';
ComponentBase.eventEmitter = new EventEmitter_1.default();
exports.default = ComponentBase;
//# sourceMappingURL=ComponentBase.js.map