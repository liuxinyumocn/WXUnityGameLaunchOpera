"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../interface/EmitterType");
const ExceptionType_1 = require("../interface/ExceptionType");
const OperaDataType_1 = require("../interface/OperaDataType");
const OperaData_1 = __importDefault(require("../operaDirector/OperaData"));
const OperaPlayer_1 = __importDefault(require("../operaDirector/OperaPlayer"));
const EventEmitter_1 = __importDefault(require("../utils/EventEmitter"));
const FrameElementInstant_1 = require("./FrameElementInstant");
class FrameBase {
    constructor(type, operaData, operaDataFrameData) {
        this.TYPE = OperaDataType_1.OperaDataType.Frame;
        this.operaData = operaData;
        if (type !== null) {
            this.frameType = type;
            this.uid = String(FrameBase.UidIncIndex++);
            try {
                this.element = new ((0, FrameElementInstant_1.GetFrameElementClass)(type))(this);
            }
            catch (_a) {
                const exp = {
                    type: ExceptionType_1.ExceptionType.Frame,
                    errmsg: `动作帧 ${type} 不存在特定的构造函数。`,
                };
                throw exp;
            }
        }
        else {
            if (!operaDataFrameData) {
                throw `Frame 快速实例模式缺失数据信息`;
            }
            const uidNumber = Number(operaDataFrameData.uid);
            if (FrameBase.UidIncIndex <= uidNumber) {
                FrameBase.UidIncIndex = uidNumber + 1;
            }
            this.uid = operaDataFrameData.uid;
            this.frameType = operaDataFrameData.frameType;
            try {
                this.element = new ((0, FrameElementInstant_1.GetFrameElementClass)(operaDataFrameData.frameType))(this);
            }
            catch (_b) {
                const exp = {
                    type: ExceptionType_1.ExceptionType.Frame,
                    errmsg: `快速模式动作帧 ${operaDataFrameData.frameType} 不存在特定的构造函数。`,
                };
                throw exp;
            }
            this.element.importParams(operaDataFrameData.params);
            this.element.importEvents(operaDataFrameData.events);
        }
        this.registerElementEventListener();
        FrameBase.proxyFunc(this);
    }
    getUid() {
        return this.uid;
    }
    getFrameType() {
        return this.frameType;
    }
    getOperaData() {
        return this.operaData;
    }
    setParams(params) {
        this.element.setParams(params);
    }
    setEvents(events) {
        this.element.setEvent(events);
    }
    exportData() {
        const data = {
            frameType: this.frameType,
            uid: this.uid,
            params: this.element.exportParams(),
            events: this.element.exportEvents(),
        };
        return data;
    }
    registerElementEventListener() {
        FrameBase.eventEmitter.registerEvent(this, (type, ...args) => {
            switch (type) {
                case EmitterType_1.FrameBaseCaseType.ParamChange:
                    OperaPlayer_1.default.eventEmitter.emit(this.operaData, EmitterType_1.OperaPlayerCaseType.ElementParamChange, ...args);
                    break;
                case EmitterType_1.FrameBaseCaseType.EventLaunch:
                    OperaPlayer_1.default.eventEmitter.emit(this.operaData, EmitterType_1.OperaPlayerCaseType.EventLaunch, ...args);
                    break;
                case EmitterType_1.FrameBaseCaseType.End:
                    OperaData_1.default.eventEmitter.emit(this.operaData, EmitterType_1.OperaPlayerCaseType.End, ...args);
                    break;
            }
        });
    }
    static proxyFunc(self) {
    }
    play() {
        this.element.actived();
        OperaPlayer_1.default.eventEmitter.emit(this.operaData, EmitterType_1.OperaPlayerCaseType.PlayFrame, this);
    }
    nextFrame() {
        return null;
    }
    toString() {
        return this.element.toString();
    }
}
FrameBase.eventEmitter = new EventEmitter_1.default();
FrameBase.UidIncIndex = 1;
exports.default = FrameBase;
//# sourceMappingURL=FrameBase.js.map