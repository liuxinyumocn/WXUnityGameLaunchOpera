"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFrameElementParamsAndEventsStruct = exports.GetFrameElementClass = void 0;
const FrameType_1 = require("../interface/FrameType");
const Animation_1 = require("./frameElement/Animation");
const Rect_1 = require("./frameElement/Rect");
const End_1 = require("./frameElement/End");
const Exception_1 = require("./frameElement/Exception");
const If_1 = require("./frameElement/If");
const Image_1 = require("./frameElement/Image");
const Media_1 = require("./frameElement/Media");
const SetParamPosition_1 = require("./frameElement/SetParamPosition");
const SetParamSize_1 = require("./frameElement/SetParamSize");
const SetParamSizeAndPosition_1 = require("./frameElement/SetParamSizeAndPosition");
const VarString_1 = require("./frameElement/VarString");
const Video_1 = require("./frameElement/Video");
const VideoPause_1 = require("./frameElement/VideoPause");
const VideoPlay_1 = require("./frameElement/VideoPlay");
const SetParam_1 = require("./frameElement/SetParam");
const Report_1 = require("./frameElement/Report");
const CheckPoint_1 = require("./frameElement/CheckPoint");
const SetTimeout_1 = require("./frameElement/SetTimeout");
const Audio_1 = require("./frameElement/Audio");
const AudioPlay_1 = require("./frameElement/AudioPlay");
const AudioPause_1 = require("./frameElement/AudioPause");
const ReportCheckPointCount_1 = require("./frameElement/ReportCheckPointCount");
function GetFrameElementClass(frameType) {
    switch (frameType) {
        case FrameType_1.FrameType.media:
            return Media_1.default;
        case FrameType_1.FrameType.createVideo:
            return Video_1.default;
        case FrameType_1.FrameType.end:
            return End_1.default;
        case FrameType_1.FrameType.var:
            return VarString_1.default;
        case FrameType_1.FrameType.createImage:
            return Image_1.default;
        case FrameType_1.FrameType.setParamPosition:
            return SetParamPosition_1.default;
        case FrameType_1.FrameType.setParamSize:
            return SetParamSize_1.default;
        case FrameType_1.FrameType.setParamSizeAndPosition:
            return SetParamSizeAndPosition_1.default;
        case FrameType_1.FrameType.createRect:
            return Rect_1.default;
        case FrameType_1.FrameType.pauseVide:
            return VideoPause_1.default;
        case FrameType_1.FrameType.playVideo:
            return VideoPlay_1.default;
        case FrameType_1.FrameType.createAnimationFunction:
            return Animation_1.default;
        case FrameType_1.FrameType.exception:
            return Exception_1.default;
        case FrameType_1.FrameType.if:
            return If_1.default;
        case FrameType_1.FrameType.setParam:
            return SetParam_1.default;
        case FrameType_1.FrameType.report:
            return Report_1.default;
        case FrameType_1.FrameType.checkPoint:
            return CheckPoint_1.default;
        case FrameType_1.FrameType.setTimeout:
            return SetTimeout_1.default;
        case FrameType_1.FrameType.createAudio:
            return Audio_1.default;
        case FrameType_1.FrameType.playAudio:
            return AudioPlay_1.default;
        case FrameType_1.FrameType.pauseAudio:
            return AudioPause_1.default;
        case FrameType_1.FrameType.reportCheckPointCount:
            return ReportCheckPointCount_1.default;
    }
    return null;
}
exports.GetFrameElementClass = GetFrameElementClass;
function GetFrameElementParamsAndEventsStruct(frameType) {
    const cls = GetFrameElementClass(frameType);
    let paramsStruct = null, eventsStruct = null;
    if (cls !== null) {
        const numbers = Object.keys(cls);
        if (numbers.indexOf('ParamsStruct') >= 0) {
            paramsStruct = cls.ParamsStruct;
        }
        if (numbers.indexOf('EventsStruct') >= 0) {
            eventsStruct = cls.EventsStruct;
        }
    }
    return {
        paramsStruct,
        eventsStruct,
    };
}
exports.GetFrameElementParamsAndEventsStruct = GetFrameElementParamsAndEventsStruct;
//# sourceMappingURL=FrameElementInstant.js.map