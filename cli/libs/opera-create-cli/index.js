"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Frame_1 = require("../frame/Frame");
var OperaData = (function () {
    function OperaData() {
    }
    OperaData.prototype.createFrame = function (type) {
        this.frames.push(new Frame_1.default(type));
    };
    OperaData.prototype.exportData = function () {
    };
    return OperaData;
}());
exports.default = OperaData;
//# sourceMappingURL=index.js.map