"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkParams = exports.mergeParamsStructA2B = exports.checkParamInTypes = exports.checkParamType = exports.ParamInputType = void 0;
const FrameType_1 = require("./FrameType");
var ParamInputType;
(function (ParamInputType) {
    ParamInputType["String"] = "String";
    ParamInputType["Selecet"] = "Selecet";
    ParamInputType["Boolean"] = "Boolean";
    ParamInputType["Number"] = "Number";
    ParamInputType["None"] = "None";
    ParamInputType["Percent"] = "Percent";
    ParamInputType["Frame"] = "Frame";
})(ParamInputType || (exports.ParamInputType = ParamInputType = {}));
function checkParamType(value, type) {
    const typeString = typeof value;
    switch (type) {
        case ParamInputType.Boolean:
            if (typeString === 'boolean')
                return {
                    type: ParamInputType.Boolean,
                };
            break;
        case ParamInputType.Number:
            if (typeString === 'number' || Number(value) == value)
                return {
                    type: ParamInputType.Number,
                };
            break;
        case ParamInputType.Percent:
            if (typeString === 'string' && /^(100|[1-9]?\d)%$/.test(value))
                return { type: ParamInputType.Percent };
            break;
        case ParamInputType.String:
            if (typeString === 'string' || typeString === 'number')
                return { type: ParamInputType.String };
            break;
        case ParamInputType.Selecet:
            return { type: ParamInputType.Selecet };
    }
    if (typeString === 'object') {
        const frameType = value.getFrameType ? value.getFrameType() : null;
        if (frameType === null || !(frameType in FrameType_1.FrameType)) {
            return null;
        }
        if (ParamInputType.Frame === type || type === frameType) {
            return {
                type: ParamInputType.Frame,
                frameType,
            };
        }
    }
    return null;
}
exports.checkParamType = checkParamType;
function checkParamInTypes(value, types) {
    if (!Array.isArray(types))
        return checkParamType(value, types);
    for (const type of types) {
        const res = checkParamType(value, type);
        if (res !== null) {
            return res;
        }
    }
    return null;
}
exports.checkParamInTypes = checkParamInTypes;
function mergeParamsStructA2B(structA, structB) {
    const keysA = Object.keys(structA);
    const keysB = Object.keys(structB);
    keysB.forEach((keyB) => {
        if (keysA.indexOf(keyB) < 0) {
            structA[keyB] = structB[keyB];
        }
    });
}
exports.mergeParamsStructA2B = mergeParamsStructA2B;
function checkParams(paramsStruct, params) {
    if (!paramsStruct || !params) {
        return;
    }
    const newParams = {};
    const paramsKeys = Object.keys(params);
    paramsKeys.forEach((key) => {
        const struct = paramsStruct[key];
        if (!struct) {
            return;
        }
        if (struct.type === null) {
            console.error(`用于约束输入项的 ${JSON.stringify(struct)} Struct 没有定义 type 字段。`);
            return;
        }
        const value = params[key];
        if (value === null || value === undefined) {
            newParams[key] = null;
            return;
        }
        const checkRes = checkParamInTypes(value, struct.type);
        if (checkRes === null) {
            console.error(`输入项`, params, `中字段 ${key} 值`, value, `没有通过类型检查。`);
        }
        else {
            newParams[key] = {
                value: value,
                type: checkRes.type,
                frameType: checkRes.frameType,
            };
        }
    });
    return newParams;
}
exports.checkParams = checkParams;
//# sourceMappingURL=ParamType.js.map