"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../interface/EmitterType");
const EventEmitter_1 = __importDefault(require("../../utils/EventEmitter"));
const ViewerBase_1 = __importDefault(require("./ViewerBase"));
class ElementBase {
    constructor(...args) {
        this.watch = {};
        this.viewer = args[0];
        this.frame = args[1];
        this.registerViewerEventListener();
    }
    $emit(event) {
        this.frame.element.$emitEvent(event);
    }
    $update() {
        ViewerBase_1.default.eventEmitter.emit(this.viewer, EmitterType_1.ViewerBaseCaseType.UpdateParams);
    }
    created() { }
    updated(params) { }
    actived() { }
    destory() { }
    domMounted() { }
    animation(style, animationInfo) {
        return new Promise((resolve) => {
            resolve(true);
        });
    }
    getEvents(eventName) {
        return this.frame.element.getEvents(eventName);
    }
    getParams(paramNames) {
        if (!Array.isArray(paramNames)) {
            paramNames = [paramNames];
        }
        const res = {};
        paramNames.forEach((name) => {
            const value = this.frame.element.getParam(name);
            if (value) {
                res[name] = value;
            }
        });
        return res;
    }
    registerViewerEventListener() {
        ElementBase.eventEmitter.registerEvent(this, (type, ...args) => {
            switch (type) {
                case EmitterType_1.ViewerElementBaseCaseType.Created:
                    this.created();
                    break;
                case EmitterType_1.ViewerElementBaseCaseType.Actived:
                    this.actived();
                    break;
                case EmitterType_1.ViewerElementBaseCaseType.DomReady:
                    this.domMounted();
                    break;
                case EmitterType_1.ViewerElementBaseCaseType.ParamChange:
                    const paramName = args[1];
                    const oldValue = args[2];
                    const newValue = args[3];
                    if (this.watch[paramName]) {
                        this.watch[paramName](newValue, oldValue);
                    }
                    break;
                case EmitterType_1.ViewerElementBaseCaseType.DestoryView:
                    this.destory();
                    break;
                case EmitterType_1.ViewerElementBaseCaseType.ParamsUpdate:
                    this.updated(args[1]);
                    break;
            }
        });
    }
}
ElementBase.eventEmitter = new EventEmitter_1.default();
exports.default = ElementBase;
//# sourceMappingURL=ElementBase.js.map