"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeEventsStructA2B = void 0;
function mergeEventsStructA2B(structA, structB) {
    const keysA = Object.keys(structA);
    const keysB = Object.keys(structB);
    keysB.forEach((keyB) => {
        if (keysA.indexOf(keyB) < 0) {
            structA[keyB] = structB[keyB];
        }
    });
}
exports.mergeEventsStructA2B = mergeEventsStructA2B;
//# sourceMappingURL=EventsType.js.map