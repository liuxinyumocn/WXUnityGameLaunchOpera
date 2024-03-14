"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../interface/EmitterType");
const FrameType_1 = require("../interface/FrameType");
const ReportType_1 = require("../interface/ReportType");
const Report_1 = __importDefault(require("../report/Report"));
const EventEmitter_1 = __importDefault(require("../utils/EventEmitter"));
const ViewerBase_1 = __importDefault(require("../viewer/base/ViewerBase"));
const OperaPlayer_1 = __importDefault(require("./OperaPlayer"));
class Director {
    constructor(component) {
        this.operaPlayerReady = false;
        this.viewerReady = false;
        this.callbackErr = [];
        this.callbackEnd = [];
        this.callbackGlobalVar = [];
        this.component = {};
        this.autoPlaying = false;
        this.componentPrototype = component;
        return this.initProxy();
    }
    init(viewer, operaDataJson, plugins) {
        return new Promise((resolve, reject) => {
            this.onReady = resolve;
            this.onFail = reject;
            if (plugins) {
                if (plugins.logger) {
                    this.logger = plugins.logger;
                }
                if (plugins.report) {
                    this.report = plugins.report;
                    this.report.bindDirector(this);
                }
            }
            try {
                this.viewer = viewer;
                this.viewer.setDirctor(this);
                this.registerOperaDataEventListener();
                this.initCompnents(this.componentPrototype);
                this.operaPlayer = new OperaPlayer_1.default(operaDataJson, this);
                if (this.report) {
                    this.report.hash = this.operaPlayer.hash;
                }
            }
            catch (e) {
                this.onFail(e);
            }
        });
    }
    play() {
        if (this.autoPlaying)
            return;
        this.autoPlaying = true;
        let loop = true;
        while (loop) {
            loop = this.operaPlayer.nextFrame();
        }
        this.autoPlaying = false;
    }
    end() {
        Director.eventEmitter.emit(this, EmitterType_1.DirctorCaseType.End);
    }
    nextFrame() {
        this.operaPlayer.nextFrame();
    }
    print() {
        console.log(this.operaPlayer.exportData());
    }
    onErr(callback) {
        if (this.callbackErr.indexOf(callback) === -1) {
            this.callbackErr.push(callback);
        }
    }
    throwErr(errinfo) {
        const reportErr = {
            errinfo,
        };
        Report_1.default.eventEmitter.emit(this.report, EmitterType_1.ReportCaseType.err, reportErr);
        this.callbackErr.forEach((item) => {
            if (typeof item === 'function') {
                item(errinfo);
            }
        });
    }
    onEnd(callback) {
        if (this.callbackEnd.indexOf(callback) === -1) {
            this.callbackEnd.push(callback);
        }
    }
    throwEnd() {
        const reportSys = {
            id: '0',
            event: '-',
            status: ReportType_1.ReportStatusType.end,
        };
        Report_1.default.eventEmitter.emit(this.report, EmitterType_1.ReportCaseType.sys, reportSys);
        this.callbackEnd.forEach((item) => {
            if (typeof item === 'function') {
                item();
            }
        });
    }
    offErr(callback) {
        const index = this.callbackErr.indexOf(callback);
        if (index !== -1) {
            this.callbackErr.splice(index, 1);
        }
    }
    setGlobalVar(globalName, value) {
        this.operaPlayer.setGlobalVar(globalName, value);
    }
    getGlobalVar(globalName) {
        return this.operaPlayer.getGlobalVar(globalName);
    }
    onGlobalVarChange(globalName, callback) {
        this.callbackGlobalVar.push({
            globalName,
            callback,
        });
    }
    offGlobalVarChange(globalName, callback) {
        const indexs = [];
        this.callbackGlobalVar.forEach((item, i) => {
            if (item.globalName === globalName && item.callback === callback) {
                indexs.unshift(i);
            }
        });
        indexs.forEach((i) => {
            this.callbackErr.splice(i, 1);
        });
    }
    checkReady() {
        if (!this.operaPlayerReady || !this.viewerReady) {
            return;
        }
        const reportSys = {
            id: '0',
            event: '-',
            status: ReportType_1.ReportStatusType.start,
        };
        Report_1.default.eventEmitter.emit(this.report, EmitterType_1.ReportCaseType.sys, reportSys);
        this.onReady(true);
    }
    registerOperaDataEventListener() {
        Director.eventEmitter.registerEvent(this, (type, ...args) => {
            var _a, _b;
            switch (type) {
                case EmitterType_1.DirctorCaseType.FrameElementParamChange:
                    if (this.operaPlayerReady)
                        ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.FrameElementParamChange, ...args);
                    break;
                case EmitterType_1.DirctorCaseType.UpdateParams:
                    this.operaPlayer.pushCollectChangedParams();
                    break;
                case EmitterType_1.DirctorCaseType.FrameCreate:
                    ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.FrameCreate, ...args);
                    break;
                case EmitterType_1.DirctorCaseType.PlayFrame:
                    ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.PlayFrame, ...args);
                    break;
                case EmitterType_1.DirctorCaseType.PlayStoryLine:
                    this.play();
                    break;
                case EmitterType_1.DirctorCaseType.OperaDataMounted:
                    Object.keys(this.component).forEach((key) => {
                        this.component[key].created(args[0]);
                    });
                    ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.OperaDataMounted, ...args);
                    this.operaPlayerReady = true;
                    this.checkReady();
                    break;
                case EmitterType_1.DirctorCaseType.ViewerReady:
                    this.viewerReady = true;
                    this.checkReady();
                    break;
                case EmitterType_1.DirctorCaseType.Exception:
                    this.throwErr(args[0]);
                    break;
                case EmitterType_1.DirctorCaseType.End:
                    ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.End, ...args);
                    this.throwEnd();
                    break;
                case EmitterType_1.DirctorCaseType.FrameElementParamChangeUpdate:
                    ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.FrameElementParamChangeUpdate, ...args);
                    const frame = args[0];
                    if (frame.getFrameType() === FrameType_1.FrameType.var) {
                        const globalName = (_b = (_a = frame.element
                            .getParam('globalName')) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toString();
                        const value = args[1]['value'];
                        if (globalName && value) {
                            this.callbackGlobalVar.forEach((item) => {
                                if (globalName === item.globalName) {
                                    item.callback(value);
                                }
                            });
                        }
                    }
                    break;
                case EmitterType_1.DirctorCaseType.Report:
                    Report_1.default.eventEmitter.emit(this.report, EmitterType_1.ReportCaseType.custom, ...args);
                    break;
                case EmitterType_1.DirctorCaseType.ReportStoryEnd:
                    this.reportStoryLine(args[0], ReportType_1.ReportStatusType.end);
                    break;
                case EmitterType_1.DirctorCaseType.ReportStoryStart:
                    this.reportStoryLine(args[0], ReportType_1.ReportStatusType.start);
                    break;
                case EmitterType_1.DirctorCaseType.CheckPoint:
                    this.reportStoryLine(this.operaPlayer.getCurrentStoryLine(), ReportType_1.ReportStatusType.checkPoint);
                    break;
                case EmitterType_1.DirctorCaseType.ReportCheckPointCount:
                    const reportSys = {
                        id: '0',
                        event: args[0] || '-1',
                        status: ReportType_1.ReportStatusType.checkPointCount,
                    };
                    Report_1.default.eventEmitter.emit(this.report, EmitterType_1.ReportCaseType.sys, reportSys);
                    break;
            }
        });
    }
    reportStoryLine(storyLine, status) {
        var _a;
        const reportSys = {
            id: (storyLine === null || storyLine === void 0 ? void 0 : storyLine.getUid()) || '-1',
            event: ((_a = storyLine.getRelatedEvent()) === null || _a === void 0 ? void 0 : _a.event) || '-',
            status,
        };
        Report_1.default.eventEmitter.emit(this.report, EmitterType_1.ReportCaseType.sys, reportSys);
    }
    initCompnents(component) {
        const arr = [];
        if (!component)
            return;
        if (Array.isArray(component)) {
            arr.push(...component);
        }
        else {
            arr.push(component);
        }
        arr.forEach((item) => {
            if (Object.keys(this.component).indexOf(item.componentName) === -1) {
                this.component[item.componentName] = new item(this);
            }
        });
    }
    initProxy() {
        const that = this;
        return new Proxy(this, {
            get(target, propKey, receiver) {
                const targetValue = Reflect.get(target, propKey, receiver);
                if (typeof targetValue !== 'undefined') {
                    return targetValue;
                }
                else {
                    const component = that.component[propKey];
                    if (!component) {
                        return undefined;
                    }
                    return component.handler;
                }
            },
        });
    }
}
Director.eventEmitter = new EventEmitter_1.default();
exports.default = Director;
//# sourceMappingURL=index.js.map