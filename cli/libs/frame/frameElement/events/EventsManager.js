"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../../interface/EmitterType");
const OperaDataType_1 = require("../../../interface/OperaDataType");
const ParamType_1 = require("../../../interface/ParamType");
const FrameBase_1 = __importDefault(require("../../FrameBase"));
class EventMananger {
    constructor(frameBase, eventsStruct) {
        this.events = [];
        this.frameBase = frameBase;
        this.eventsStruct = eventsStruct;
    }
    registerEvent(events) {
        const eventsTemp = [];
        if (Array.isArray(events.bind)) {
            eventsTemp.push(...events.bind);
        }
        else {
            eventsTemp.push(events.bind);
        }
        events.bind = eventsTemp;
        const res = EventMananger.EventCheck(this.eventsStruct, events);
        if (res !== null) {
            this.events.push(res);
        }
    }
    getEvents(eventName) {
        if (!eventName) {
            return this.events;
        }
        const res = [];
        this.events.forEach((item) => {
            if (item.event === eventName) {
                res.push(item);
            }
        });
        return res;
    }
    exportEvents() {
        const data = [];
        this.events.forEach((item) => {
            data.push({
                event: item.event,
                params: item.params,
                bind: item.bind.map((ele) => {
                    return {
                        type: ele.type,
                        uid: ele.uid,
                    };
                }),
                keep: !!item.keep,
            });
        });
        return data;
    }
    importEvents(data) {
        data.forEach((item) => {
            const event = {
                event: item.event,
                params: item.params,
                bind: item.bind.map((ele) => {
                    const bindItem = {
                        type: ele.type,
                        uid: ele.uid,
                    };
                    this.frameBase
                        .getFrameBase()
                        .getOperaData()
                        .delegateUid2Ob(ele.type, ele.uid, bindItem, 'ob');
                    return bindItem;
                }),
                keep: !!item.keep,
            };
            this.events.push(event);
        });
    }
    launchEvent(event) {
        for (let i = 0; i < this.events.length; i++) {
            if (this.events[i] === event) {
                if (!event.keep) {
                    this.events.splice(i, 1);
                }
                FrameBase_1.default.eventEmitter.emit(this.frameBase.getFrameBase(), EmitterType_1.FrameBaseCaseType.EventLaunch, event);
                return;
            }
        }
    }
    static EventCheck(eventsStructs, event) {
        const eventsNames = Object.keys(eventsStructs);
        if (eventsNames.indexOf(event.event) < 0) {
            console.error(`事件定义范围 ${JSON.stringify(eventsNames)} 不存在注册目标 event 类型 ${event.event}`);
            return null;
        }
        const eventStruct = eventsStructs[event.event];
        const newParams = (0, ParamType_1.checkParams)(eventStruct.params, event.params) || {};
        const bind = [];
        if (!Array.isArray(event.bind)) {
            bind.push(event.bind);
        }
        else {
            bind.push(...event.bind);
        }
        const newBinds = [];
        bind.forEach((item) => {
            newBinds.push({
                type: OperaDataType_1.OperaDataType.StoryLine,
                uid: item.getUid(),
                ob: item,
            });
        });
        return {
            event: event.event,
            params: newParams,
            bind: newBinds,
            keep: !!event.keep,
        };
    }
}
exports.default = EventMananger;
//# sourceMappingURL=EventsManager.js.map