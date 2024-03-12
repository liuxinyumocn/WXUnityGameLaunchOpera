"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../interface/EmitterType");
const operaDirector_1 = require("../../operaDirector");
const EventEmitter_1 = require("../../utils/EventEmitter");
const ElementBase_1 = require("./ElementBase");
class ViewerBase {
    constructor(viewerElementsClass) {
        this.elements = [];
        this.frameMap = new WeakMap();
        this.viewerElementsClass = viewerElementsClass;
    }
    setDirctor(dirctor) {
        this.dirctor = dirctor;
        this.registerDirctorEventListener();
    }
    getViewerElementByFrameBase(frame) {
        if (this.frameMap.has(frame)) {
            return this.frameMap.get(frame);
        }
        return null;
    }
    emitterTodoFrameCreate(frame) {
        this.viewerElementsClass.forEach((classHandler) => {
            if (classHandler.ListenerFrameType === frame.getFrameType()) {
                this.createViewer(classHandler, frame);
            }
        });
    }
    createViewer(classHandler, frame) {
        const init = new classHandler(this, frame);
        this.elements.push(init);
        this.frameMap.set(frame, init);
        classHandler.eventEmitter.emit(init, EmitterType_1.ViewerElementBaseCaseType.Created);
    }
    mounted() { }
    destory() { }
    registerDirctorEventListener() {
        ViewerBase.eventEmitter.registerEvent(this, (type, ...args) => {
            switch (type) {
                case EmitterType_1.ViewerBaseCaseType.FrameCreate:
                    this.emitterTodoFrameCreate(args[0]);
                    break;
                case EmitterType_1.ViewerBaseCaseType.PlayFrame:
                    if (this.frameMap.has(args[0])) {
                        ElementBase_1.default.eventEmitter.emit(this.frameMap.get(args[0]), EmitterType_1.ViewerElementBaseCaseType.Actived);
                    }
                    break;
                case EmitterType_1.ViewerBaseCaseType.OperaDataMounted:
                    this.mounted();
                    break;
                case EmitterType_1.ViewerBaseCaseType.FrameElementParamChange:
                    if (this.frameMap.has(args[0])) {
                        ElementBase_1.default.eventEmitter.emit(this.frameMap.get(args[0]), EmitterType_1.ViewerElementBaseCaseType.ParamChange, ...args);
                    }
                    break;
                case EmitterType_1.ViewerBaseCaseType.Exception:
                    operaDirector_1.default.eventEmitter.emit(this.dirctor, EmitterType_1.DirctorCaseType.Exception, ...args);
                    break;
                case EmitterType_1.ViewerBaseCaseType.End:
                    this.destory();
                    break;
                case EmitterType_1.ViewerBaseCaseType.FrameElementParamChangeUpdate:
                    if (this.frameMap.has(args[0])) {
                        ElementBase_1.default.eventEmitter.emit(this.frameMap.get(args[0]), EmitterType_1.ViewerElementBaseCaseType.ParamsUpdate, ...args);
                    }
                    break;
                case EmitterType_1.ViewerBaseCaseType.UpdateParams:
                    operaDirector_1.default.eventEmitter.emit(this.dirctor, EmitterType_1.DirctorCaseType.UpdateParams);
                    break;
                case EmitterType_1.ViewerBaseCaseType.Report:
                    operaDirector_1.default.eventEmitter.emit(this.dirctor, EmitterType_1.DirctorCaseType.Report, ...args);
                    break;
                case EmitterType_1.ViewerBaseCaseType.CheckPoint:
                    operaDirector_1.default.eventEmitter.emit(this.dirctor, EmitterType_1.DirctorCaseType.CheckPoint, ...args);
                    break;
                case EmitterType_1.ViewerBaseCaseType.ReportCheckPointCount:
                    operaDirector_1.default.eventEmitter.emit(this.dirctor, EmitterType_1.DirctorCaseType.ReportCheckPointCount, ...args);
                    break;
            }
        });
    }
}
ViewerBase.eventEmitter = new EventEmitter_1.default();
exports.default = ViewerBase;
//# sourceMappingURL=ViewerBase.js.map