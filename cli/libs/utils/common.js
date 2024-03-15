"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareVersion = exports.wx = exports.common = void 0;
exports.common = {
    wx: null,
};
function wx() {
    if (exports.common.wx) {
        return exports.common.wx;
    }
    return {};
}
exports.wx = wx;
function compareVersion(v1, v2) {
    if (typeof v1 !== 'string' || typeof v2 !== 'string') {
        if (typeof v1 !== 'string' && typeof v2 !== 'string') {
            return 0;
        }
        if (typeof v1 !== 'string') {
            return 1;
        }
        return -1;
    }
    const version1 = v1.split('.');
    const version2 = v2.split('.');
    const len = Math.max(version1.length, version2.length);
    while (version1.length < len) {
        version1.push('0');
    }
    while (version2.length < len) {
        version2.push('0');
    }
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(version1[i], 10);
        const num2 = parseInt(version2[i], 10);
        if (num1 > num2) {
            return 1;
        }
        if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}
exports.compareVersion = compareVersion;
//# sourceMappingURL=common.js.map