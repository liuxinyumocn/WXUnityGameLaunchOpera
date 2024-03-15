"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const EmitterType_1 = require("../interface/EmitterType");
const ExceptionType_1 = require("../interface/ExceptionType");
const FrameType_1 = require("../interface/FrameType");
const OperaDataType_1 = require("../interface/OperaDataType");
const OperaData_1 = __importDefault(require("./OperaData"));
class OperaPlayer extends OperaData_1.default {
    constructor(operaDataJson, director) {
        super(operaDataJson, director);
        this.currentRuntime = null;
        this.collectsParams = [];
        this.registerOperaPlayerEventListener();
    }
    setGlobalVar(globalName, value) {
        this.frames.forEach((frame) => {
            var _a, _b;
            if (frame.getFrameType() === FrameType_1.FrameType.var) {
                if (((_b = (_a = frame.element.getParam('globalName')) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString()) === globalName) {
                    frame.setParams({
                        value,
                    });
                }
            }
        });
    }
    getGlobalVar(globalName) {
        var _a, _b, _c, _d;
        for (const frame of this.frames) {
            if (frame.getFrameType() === FrameType_1.FrameType.var) {
                if (((_b = (_a = frame.element.getParam('globalName')) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString()) === globalName) {
                    return (_d = (_c = frame.element.getParam('value')) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.toString();
                }
            }
        }
    }
    getCurrentStoryLine() {
        if (this.currentRuntime === null)
            return null;
        return this.currentRuntime.storyLineStack.length === 0
            ? null
            : this.currentRuntime.storyLineStack[0];
    }
    nextFrame() {
        if (this.currentRuntime === null) {
            if (this.mainStoryLine === null) {
                const exp = {
                    type: ExceptionType_1.ExceptionType.Director,
                    errmsg: `剧本没有主故事线无法播放，请先创建主故事线。`,
                };
                _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.Exception, exp);
                return;
            }
            this.currentRuntime = {
                storyLineStack: [],
                frame: null,
            };
            OperaPlayer.eventEmitter.emit(this, EmitterType_1.OperaPlayerCaseType.PlayStoryLine, this.mainStoryLine);
        }
        if (this.currentRuntime.storyLineStack.length > 0) {
            const res = this.currentRuntime.storyLineStack[0].nextFrame();
            if (res === null) {
                this.currentRuntime.storyLineStack.shift();
            }
            this.pushCollectChangedParams();
            return res ? true : false;
        }
        else {
            this.pushCollectChangedParams();
            return false;
        }
    }
    registerOperaPlayerEventListener() {
        OperaData_1.default.eventEmitter.registerEvent(this, (type, ...args) => {
            switch (type) {
                case EmitterType_1.OperaPlayerCaseType.ElementParamChange:
                    _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.FrameElementParamChange, ...args);
                    this.collectChangedParams(args[0], args[1], args[2], args[3]);
                    break;
                case EmitterType_1.OperaPlayerCaseType.PlayFrame:
                    const frame = args[0];
                    this.updateRunttimeFrame(frame);
                    _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.PlayFrame, ...args);
                    break;
                case EmitterType_1.OperaPlayerCaseType.PlayStoryLine:
                    const storyLine = args[0];
                    this.currentRuntime.storyLineStack.unshift(storyLine);
                    _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.PlayStoryLine, ...args);
                    break;
                case EmitterType_1.OperaPlayerCaseType.EventLaunch:
                    const event = args[0];
                    this.todoEventLaunch(event);
                    break;
                case EmitterType_1.OperaPlayerCaseType.Exception:
                    _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.Exception, ...args);
                    break;
                case EmitterType_1.OperaPlayerCaseType.End:
                    _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.End, ...args);
                    break;
                case EmitterType_1.OperaPlayerCaseType.ReportStoryEnd:
                    _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.ReportStoryEnd, ...args);
                    break;
                case EmitterType_1.OperaPlayerCaseType.ReportStoryStart:
                    _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.ReportStoryStart, ...args);
                    break;
            }
        });
    }
    updateRunttimeFrame(frame) {
        this.currentRuntime.frame = frame;
    }
    todoEventLaunch(event) {
        const storyLine = this.createTempStoryLine(event);
        event.bind.forEach((item) => {
            storyLine.add(this.getBindEventOb(item));
        });
        storyLine.play();
    }
    getBindEventOb(item) {
        if (item.type === OperaDataType_1.OperaDataType.StoryLine) {
            return this.getFrameById(item.uid);
        }
        else if (item.type === OperaDataType_1.OperaDataType.Frame) {
            return this.getStoryLineById(item.uid);
        }
    }
    collectChangedParams(frame, paramName, oldValue, newValue) {
        var _a;
        (_a = this.collectsParams) === null || _a === void 0 ? void 0 : _a.push({
            frame,
            paramName,
            oldValue,
            newValue,
        });
    }
    pushCollectChangedParams() {
        const changed = new Map();
        this.collectsParams.forEach((item) => {
            if (!changed.has(item.frame)) {
                const v = {};
                v[item.paramName] = {
                    value: item.newValue,
                    oldValue: item.oldValue,
                };
                changed.set(item.frame, v);
            }
            else {
                const v = changed.get(item.frame);
                if (v[item.paramName]) {
                    v[item.paramName].value = item.newValue;
                }
                else {
                    v[item.paramName] = {
                        value: item.newValue,
                        oldValue: item.oldValue,
                    };
                }
            }
        });
        changed.forEach((item, key) => {
            _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.FrameElementParamChangeUpdate, key, item);
        });
        this.collectsParams = [];
    }
}
exports.default = OperaPlayer;
//# sourceMappingURL=OperaPlayer.js.map