"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPositionAndSizeChange = exports.PositionAndSizeKeys = exports.isPercent = exports.percentCal = exports.calPositionAndSize = exports.calPositionAndSizeByParams = void 0;
const GlobalInfo_1 = require("../coverView/GlobalInfo");
function calPositionAndSizeByParams(ob, ob2) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const cal = {
        width: (ob2 === null || ob2 === void 0 ? void 0 : ob2.width) ? ob2.width.value : (_a = ob.width) === null || _a === void 0 ? void 0 : _a.value,
        height: (ob2 === null || ob2 === void 0 ? void 0 : ob2.height) ? ob2.height.value : (_b = ob.height) === null || _b === void 0 ? void 0 : _b.value,
        left: (ob2 === null || ob2 === void 0 ? void 0 : ob2.left) ? ob2.left.value : (_c = ob.left) === null || _c === void 0 ? void 0 : _c.value,
        right: (ob2 === null || ob2 === void 0 ? void 0 : ob2.right) ? ob2.right.value : (_d = ob.right) === null || _d === void 0 ? void 0 : _d.value,
        top: (ob2 === null || ob2 === void 0 ? void 0 : ob2.top) ? ob2.top.value : (_e = ob.top) === null || _e === void 0 ? void 0 : _e.value,
        bottom: (ob2 === null || ob2 === void 0 ? void 0 : ob2.bottom) ? ob2.bottom.value : (_f = ob.bottom) === null || _f === void 0 ? void 0 : _f.value,
        scaleHeight: (ob2 === null || ob2 === void 0 ? void 0 : ob2.scaleHeight)
            ? ob2.scaleHeight.value
            : (_g = ob.scaleHeight) === null || _g === void 0 ? void 0 : _g.value,
        scaleWidth: (ob2 === null || ob2 === void 0 ? void 0 : ob2.scaleWidth) ? ob2.scaleWidth.value : (_h = ob.scaleWidth) === null || _h === void 0 ? void 0 : _h.value,
        opacity: (ob2 === null || ob2 === void 0 ? void 0 : ob2.opacity) ? ob2.opacity.value : (_j = ob.opacity) === null || _j === void 0 ? void 0 : _j.value,
    };
    const res = calPositionAndSize(cal);
    return res ? res : {};
}
exports.calPositionAndSizeByParams = calPositionAndSizeByParams;
function calPositionAndSize(ob) {
    let { width, height, left, top, right, bottom } = ob;
    let isPerLeft = isPercent(left), isPerTop = isPercent(top);
    const isPerRight = isPercent(right), isPerBottom = isPercent(bottom);
    if (width === undefined) {
        if (left === undefined || right === undefined) {
            return null;
        }
        if (isPerLeft || isPerRight) {
            return null;
        }
        width = GlobalInfo_1.screenWidth - Number(left) - Number(right);
    }
    else {
        if (typeof width === 'string') {
            width = percentCal(width, GlobalInfo_1.screenWidth);
        }
        if (isPerRight && !isPerLeft) {
            left = `${100 - getPercentValue(`${right}`)}%`;
            isPerLeft = true;
        }
        if (isPerLeft) {
            left = (GlobalInfo_1.screenWidth * getPercentValue(`${left}`)) / 100 - width / 2;
        }
        if (left !== undefined) {
            right = GlobalInfo_1.screenWidth - width - Number(left);
        }
        else if (right !== undefined) {
            left = GlobalInfo_1.screenWidth - width - Number(right);
        }
    }
    if (height === undefined) {
        if (top === undefined || bottom === undefined) {
            return null;
        }
        if (isPerTop || isPerBottom) {
            return null;
        }
        height = GlobalInfo_1.screenHeight - Number(top) - Number(bottom);
    }
    else {
        if (typeof height === 'string') {
            height = percentCal(height, GlobalInfo_1.screenHeight);
        }
        if (isPerBottom && !isPerTop) {
            top = `${100 - getPercentValue(`${bottom}`)}%`;
            isPerTop = true;
        }
        if (isPerTop) {
            top = (GlobalInfo_1.screenHeight * getPercentValue(`${top}`)) / 100 - height / 2;
        }
        if (top !== undefined) {
            bottom = GlobalInfo_1.screenHeight - height - Number(top);
        }
        else if (bottom !== undefined) {
            top = GlobalInfo_1.screenHeight - height - Number(bottom);
        }
    }
    return Object.assign(ob, {
        width,
        height,
        left: Number(left),
        right: Number(right),
        top: Number(top),
        bottom: Number(bottom),
    });
}
exports.calPositionAndSize = calPositionAndSize;
function percentCal(per, fullValue) {
    if (typeof per === 'number')
        return per;
    return (getPercentValue(per) / 100) * fullValue;
}
exports.percentCal = percentCal;
function isPercent(text) {
    if (typeof text !== 'string') {
        return false;
    }
    return /^(100|[1-9]?\d)%$/.test(text);
}
exports.isPercent = isPercent;
function getPercentValue(value) {
    const percentageRegex = /^(\d+)%$/;
    const match = percentageRegex.exec(value);
    if (match) {
        return parseInt(match[1], 10);
    }
    return 0;
}
exports.PositionAndSizeKeys = [
    'left',
    'right',
    'top',
    'bottom',
    'width',
    'height',
    'opacity',
    'scaleHeight',
    'scaleWidth',
];
function isPositionAndSizeChange(param) {
    const keys = Object.keys(param);
    for (const key0 of keys) {
        if (exports.PositionAndSizeKeys.indexOf(key0) !== -1) {
            return true;
        }
    }
    return false;
}
exports.isPositionAndSizeChange = isPositionAndSizeChange;
//# sourceMappingURL=PositionTools.js.map