"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressCaseType = exports.ReportCaseType = exports.LoggerCaseType = exports.ViewerElementBaseCaseType = exports.ViewerBaseCaseType = exports.DirctorCaseType = exports.OperaPlayerCaseType = exports.FrameBaseCaseType = void 0;
var FrameBaseCaseType;
(function (FrameBaseCaseType) {
    FrameBaseCaseType[FrameBaseCaseType["ParamChange"] = 0] = "ParamChange";
    FrameBaseCaseType[FrameBaseCaseType["EventLaunch"] = 1] = "EventLaunch";
    FrameBaseCaseType[FrameBaseCaseType["End"] = 2] = "End";
})(FrameBaseCaseType || (exports.FrameBaseCaseType = FrameBaseCaseType = {}));
var OperaPlayerCaseType;
(function (OperaPlayerCaseType) {
    OperaPlayerCaseType[OperaPlayerCaseType["ElementParamChange"] = 0] = "ElementParamChange";
    OperaPlayerCaseType[OperaPlayerCaseType["PlayFrame"] = 1] = "PlayFrame";
    OperaPlayerCaseType[OperaPlayerCaseType["PlayStoryLine"] = 2] = "PlayStoryLine";
    OperaPlayerCaseType[OperaPlayerCaseType["EventLaunch"] = 3] = "EventLaunch";
    OperaPlayerCaseType[OperaPlayerCaseType["Exception"] = 4] = "Exception";
    OperaPlayerCaseType[OperaPlayerCaseType["End"] = 5] = "End";
    OperaPlayerCaseType[OperaPlayerCaseType["ReportStoryStart"] = 6] = "ReportStoryStart";
    OperaPlayerCaseType[OperaPlayerCaseType["ReportStoryEnd"] = 7] = "ReportStoryEnd";
})(OperaPlayerCaseType || (exports.OperaPlayerCaseType = OperaPlayerCaseType = {}));
var DirctorCaseType;
(function (DirctorCaseType) {
    DirctorCaseType[DirctorCaseType["FrameElementParamChange"] = 0] = "FrameElementParamChange";
    DirctorCaseType[DirctorCaseType["FrameElementParamChangeUpdate"] = 1] = "FrameElementParamChangeUpdate";
    DirctorCaseType[DirctorCaseType["FrameCreate"] = 2] = "FrameCreate";
    DirctorCaseType[DirctorCaseType["PlayFrame"] = 3] = "PlayFrame";
    DirctorCaseType[DirctorCaseType["PlayStoryLine"] = 4] = "PlayStoryLine";
    DirctorCaseType[DirctorCaseType["OperaDataMounted"] = 5] = "OperaDataMounted";
    DirctorCaseType[DirctorCaseType["ViewerReady"] = 6] = "ViewerReady";
    DirctorCaseType[DirctorCaseType["Exception"] = 7] = "Exception";
    DirctorCaseType[DirctorCaseType["End"] = 8] = "End";
    DirctorCaseType[DirctorCaseType["UpdateParams"] = 9] = "UpdateParams";
    DirctorCaseType[DirctorCaseType["Report"] = 10] = "Report";
    DirctorCaseType[DirctorCaseType["ReportStoryStart"] = 11] = "ReportStoryStart";
    DirctorCaseType[DirctorCaseType["ReportStoryEnd"] = 12] = "ReportStoryEnd";
    DirctorCaseType[DirctorCaseType["CheckPoint"] = 13] = "CheckPoint";
    DirctorCaseType[DirctorCaseType["ReportCheckPointCount"] = 14] = "ReportCheckPointCount";
})(DirctorCaseType || (exports.DirctorCaseType = DirctorCaseType = {}));
var ViewerBaseCaseType;
(function (ViewerBaseCaseType) {
    ViewerBaseCaseType[ViewerBaseCaseType["FrameCreate"] = 0] = "FrameCreate";
    ViewerBaseCaseType[ViewerBaseCaseType["PlayFrame"] = 1] = "PlayFrame";
    ViewerBaseCaseType[ViewerBaseCaseType["OperaDataMounted"] = 2] = "OperaDataMounted";
    ViewerBaseCaseType[ViewerBaseCaseType["FrameElementParamChange"] = 3] = "FrameElementParamChange";
    ViewerBaseCaseType[ViewerBaseCaseType["FrameElementParamChangeUpdate"] = 4] = "FrameElementParamChangeUpdate";
    ViewerBaseCaseType[ViewerBaseCaseType["Exception"] = 5] = "Exception";
    ViewerBaseCaseType[ViewerBaseCaseType["End"] = 6] = "End";
    ViewerBaseCaseType[ViewerBaseCaseType["UpdateParams"] = 7] = "UpdateParams";
    ViewerBaseCaseType[ViewerBaseCaseType["Report"] = 8] = "Report";
    ViewerBaseCaseType[ViewerBaseCaseType["CheckPoint"] = 9] = "CheckPoint";
    ViewerBaseCaseType[ViewerBaseCaseType["ReportCheckPointCount"] = 10] = "ReportCheckPointCount";
})(ViewerBaseCaseType || (exports.ViewerBaseCaseType = ViewerBaseCaseType = {}));
var ViewerElementBaseCaseType;
(function (ViewerElementBaseCaseType) {
    ViewerElementBaseCaseType[ViewerElementBaseCaseType["Created"] = 0] = "Created";
    ViewerElementBaseCaseType[ViewerElementBaseCaseType["Actived"] = 1] = "Actived";
    ViewerElementBaseCaseType[ViewerElementBaseCaseType["DomReady"] = 2] = "DomReady";
    ViewerElementBaseCaseType[ViewerElementBaseCaseType["ParamChange"] = 3] = "ParamChange";
    ViewerElementBaseCaseType[ViewerElementBaseCaseType["DestoryView"] = 4] = "DestoryView";
    ViewerElementBaseCaseType[ViewerElementBaseCaseType["ParamsUpdate"] = 5] = "ParamsUpdate";
})(ViewerElementBaseCaseType || (exports.ViewerElementBaseCaseType = ViewerElementBaseCaseType = {}));
var LoggerCaseType;
(function (LoggerCaseType) {
})(LoggerCaseType || (exports.LoggerCaseType = LoggerCaseType = {}));
var ReportCaseType;
(function (ReportCaseType) {
    ReportCaseType[ReportCaseType["custom"] = 0] = "custom";
    ReportCaseType[ReportCaseType["sys"] = 1] = "sys";
    ReportCaseType[ReportCaseType["err"] = 2] = "err";
})(ReportCaseType || (exports.ReportCaseType = ReportCaseType = {}));
var ProgressCaseType;
(function (ProgressCaseType) {
    ProgressCaseType[ProgressCaseType["RefreshProgress"] = 0] = "RefreshProgress";
})(ProgressCaseType || (exports.ProgressCaseType = ProgressCaseType = {}));
//# sourceMappingURL=EmitterType.js.map