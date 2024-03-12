"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidClick = void 0;
const isValidClick = (event) => {
    const startPosX = event.absoluteX;
    const startPosY = event.absoluteY;
    const endPosX = event.absoluteEndX;
    const endPosY = event.absoluteEndY;
    const touchTimes = event.pressInterval;
    let result = false;
    if (Math.abs(endPosY - startPosY) < 30 &&
        Math.abs(endPosX - startPosX) < 30 &&
        touchTimes < 300) {
        result = true;
    }
    return result;
};
exports.isValidClick = isValidClick;
//# sourceMappingURL=OnEventTools.js.map