"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../interface/EmitterType");
const OperaDataType_1 = require("../../interface/OperaDataType");
const OperaPlayer_1 = __importDefault(require("../../operaDirector/OperaPlayer"));
class StoryLineBase {
    constructor(operaData, operaDataStoryLineData) {
        this.TYPE = OperaDataType_1.OperaDataType.StoryLine;
        this.operaData = operaData;
        this.datas = [];
        if (!operaDataStoryLineData) {
            this.uid = String(StoryLineBase.UidIncIndex++);
        }
        else {
            const uidNumber = Number(operaDataStoryLineData.uid);
            if (StoryLineBase.UidIncIndex <= uidNumber) {
                StoryLineBase.UidIncIndex = uidNumber + 1;
            }
            this.uid = operaDataStoryLineData.uid;
            operaDataStoryLineData.datas.forEach((item) => {
                if (item.type === OperaDataType_1.OperaDataType.Frame) {
                    this.datas.push(this.operaData.getFrameById(item.uid));
                }
                else if (item.type === OperaDataType_1.OperaDataType.StoryLine) {
                    this.datas.push(null);
                    this.operaData.delegateUid2Ob(OperaDataType_1.OperaDataType.StoryLine, item.uid, this.datas, this.datas.length - 1);
                }
            });
        }
    }
    add(...args) {
        this.datas.push(...args);
    }
    getUid() {
        return this.uid;
    }
    getRelatedEvent() {
        return this.relatedEvent;
    }
    nextFrame() {
        this.currentData = this.datas.shift();
        if (this.currentData) {
            this.currentData.play();
            return this.currentData;
        }
        else {
            OperaPlayer_1.default.eventEmitter.emit(this.operaData, EmitterType_1.OperaPlayerCaseType.ReportStoryEnd, this);
            return null;
        }
    }
    play() {
        OperaPlayer_1.default.eventEmitter.emit(this.operaData, EmitterType_1.OperaPlayerCaseType.PlayStoryLine, this);
    }
    exportData() {
        return {
            uid: this.getUid(),
            datas: this.datas.map((item) => {
                return {
                    type: item.TYPE,
                    uid: item.getUid(),
                };
            }),
        };
    }
}
StoryLineBase.UidIncIndex = 1;
exports.default = StoryLineBase;
//# sourceMappingURL=StoryLineBase.js.map