"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../interface/EmitterType");
const EventsType_1 = require("../../interface/EventsType");
const OperaDataType_1 = require("../../interface/OperaDataType");
const ParamType_1 = require("../../interface/ParamType");
const FrameBase_1 = require("../FrameBase");
const FrameElementInstant_1 = require("../FrameElementInstant");
const EventsManager_1 = require("./events/EventsManager");
class FrameElementBase {
    constructor(frame, paramsStruct, eventsStruct) {
        this.params = {};
        this.frame = frame;
        if (Array.isArray(paramsStruct)) {
            const paramsStructNew = {};
            const eventsStructNew = {};
            paramsStruct.forEach((itemFrameType) => {
                const pe = (0, FrameElementInstant_1.GetFrameElementParamsAndEventsStruct)(itemFrameType);
                if (pe.eventsStruct) {
                    (0, EventsType_1.mergeEventsStructA2B)(eventsStructNew, pe.eventsStruct);
                }
                if (pe.paramsStruct) {
                    (0, ParamType_1.mergeParamsStructA2B)(paramsStructNew, pe.paramsStruct);
                }
            });
            paramsStruct = paramsStructNew;
            eventsStruct = eventsStructNew;
        }
        this.paramsStruct = paramsStruct || {};
        this.eventsStruct = eventsStruct || {};
        this.eventsManager = new EventsManager_1.default(this, this.eventsStruct);
        this.initParams();
    }
    actived() { }
    setParams(params) {
        const newParams = (0, ParamType_1.checkParams)(this.paramsStruct, params);
        if (newParams)
            Object.keys(newParams).forEach((key) => {
                if (newParams[key] === null) {
                    delete this.params[key];
                    return;
                }
                this.params[key] = newParams[key];
            });
    }
    getParam(name) {
        return this.params[name];
    }
    exportParams() {
        const data = {};
        Object.keys(this.params).forEach((key) => {
            if (this.params[key] === null)
                return;
            if (this.params[key].type === ParamType_1.ParamInputType.Frame) {
                data[key] = {
                    value: this.getFrameUid(this.params[key].value),
                    type: ParamType_1.ParamInputType.Frame,
                    frameType: this.params[key].frameType,
                };
            }
            else {
                data[key] = {
                    type: this.params[key].type,
                    value: this.params[key].value,
                };
            }
        });
        return data;
    }
    importParams(data) {
        Object.keys(data).forEach((key) => {
            const item = data[key];
            this.params[key] = {
                type: item.type,
                value: item.value,
                frameType: item.frameType,
            };
            if (item.type === ParamType_1.ParamInputType.Frame)
                this.frame
                    .getOperaData()
                    .delegateUid2Ob(OperaDataType_1.OperaDataType.Frame, item.value, this.params[key], 'value');
        });
    }
    setEvent(event) {
        this.eventsManager.registerEvent(event);
    }
    getEvents(eventName) {
        return this.eventsManager.getEvents(eventName);
    }
    $emitEvent(event) {
        this.eventsManager.launchEvent(event);
    }
    exportEvents() {
        return this.eventsManager.exportEvents();
    }
    importEvents(data) {
        this.eventsManager.importEvents(data);
    }
    getFrameBase() {
        return this.frame;
    }
    initParams() {
        const params = {};
        Object.keys(this.paramsStruct).forEach((key) => {
            const struct = this.paramsStruct[key];
            params[key] = null;
            if (struct.default !== undefined) {
                const checkRes = (0, ParamType_1.checkParamInTypes)(struct.default, struct.type);
                if (checkRes === null) {
                    console.error(`默认配置项目 ${struct} 中 default 值 ${struct.default} 没有通过类型检查`);
                    return;
                }
                params[key] = {
                    value: struct.default,
                    type: checkRes.type,
                    frameType: checkRes.frameType,
                };
            }
        });
        const that = this;
        this.params = new Proxy(params, {
            get(target, property) {
                return target[property];
            },
            set(target, property, newValue) {
                const oldValue = target[property];
                if ((oldValue === null || oldValue === void 0 ? void 0 : oldValue.value) !== (newValue === null || newValue === void 0 ? void 0 : newValue.value)) {
                    target[property] = newValue;
                }
                FrameBase_1.default.eventEmitter.emit(that.frame, EmitterType_1.FrameBaseCaseType.ParamChange, that.frame, property, oldValue, newValue);
                return true;
            },
        });
    }
    getFrameUid(frame) {
        return frame.getUid();
    }
}
exports.default = FrameElementBase;
//# sourceMappingURL=FrameElementBase.js.map