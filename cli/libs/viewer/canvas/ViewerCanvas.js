"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ViewerBase_1 = __importDefault(require("../base/ViewerBase"));
class ViewerCanvas extends ViewerBase_1.default {
    constructor() {
        super(ViewerCanvas.ViewerElementsClass);
    }
}
ViewerCanvas.ViewerElementsClass = [];
exports.default = ViewerCanvas;
//# sourceMappingURL=ViewerCanvas.js.map