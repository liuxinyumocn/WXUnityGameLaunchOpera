"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunningType = exports.LoggerType = void 0;
var LoggerType;
(function (LoggerType) {
    LoggerType[LoggerType["BaseInfo"] = 0] = "BaseInfo";
    LoggerType[LoggerType["ViewAction"] = 2] = "ViewAction";
    LoggerType[LoggerType["GlobalVarAction"] = 3] = "GlobalVarAction";
})(LoggerType || (exports.LoggerType = LoggerType = {}));
var RunningType;
(function (RunningType) {
    RunningType[RunningType["Record"] = 0] = "Record";
    RunningType[RunningType["Execute"] = 1] = "Execute";
})(RunningType || (exports.RunningType = RunningType = {}));
//# sourceMappingURL=LoggerType.js.map