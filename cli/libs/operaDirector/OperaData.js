"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const Frame_1 = require("../frame/Frame");
const FrameBase_1 = require("../frame/FrameBase");
const StoryLine_1 = require("../frame/storyLine/StoryLine");
const StoryLineBase_1 = require("../frame/storyLine/StoryLineBase");
const EmitterType_1 = require("../interface/EmitterType");
const FrameType_1 = require("../interface/FrameType");
const OperaDataType_1 = require("../interface/OperaDataType");
const EventEmitter_1 = require("../utils/EventEmitter");
const util_1 = require("@tencent/minigamefe/common/util");
class OperaData {
    constructor(operaDataJson, director) {
        this.name = '';
        this.author = '';
        this.hash = 'none';
        this.delegateQueue = [];
        this.frames = [];
        this.storyLines = [];
        this.director = director;
        if (operaDataJson) {
            this.loadOperaData(operaDataJson);
        }
        else {
            this.EndFrame = this.createFrame(FrameType_1.FrameType.end);
        }
    }
    createFrame(type, params, events) {
        const frame = new Frame_1.default(type, this);
        this.frames.push(frame);
        _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.FrameCreate, frame);
        if (params) {
            this.setFrameParams(frame, params);
        }
        if (events) {
            if (Array.isArray(events)) {
                events.forEach((event) => {
                    this.setFrameEvents(frame, event);
                });
            }
            else {
                this.setFrameEvents(frame, events);
            }
        }
        return frame;
    }
    setFrameParams(frame, param) {
        frame.setParams(param);
    }
    setFrameEvents(frame, events) {
        frame.setEvents(events);
    }
    createStoryLine() {
        const storyLine = new StoryLine_1.default(this);
        this.storyLines.push(storyLine);
        if (!this.mainStoryLine) {
            this.mainStoryLine = storyLine;
        }
        return storyLine;
    }
    createTempStoryLine(event) {
        const storyLine = new StoryLine_1.default(this, event);
        return storyLine;
    }
    getFrameById(uid) {
        for (const frame of this.frames) {
            if (frame.getUid() === uid) {
                return frame;
            }
        }
        return null;
    }
    getStoryLineById(uid) {
        for (const storyLine of this.storyLines) {
            if (storyLine.getUid() === uid) {
                return storyLine;
            }
        }
        return null;
    }
    exportData(baseInfo, hash) {
        const opera = {
            frames: this.exportDataFrame(),
            storyLines: this.exportDataStoryLines(),
            mainStoryLine: this.mainStoryLine.getUid(),
        };
        if (hash) {
            this.hash = hash(JSON.stringify(opera)).substring(0, 8);
        }
        const operaData = {
            name: (baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.name) || this.name,
            author: (baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.author) || this.author,
            version: OperaData.Version,
            hash: this.hash,
            opera,
        };
        return JSON.stringify(operaData);
    }
    exportDataFrame() {
        const frameDatas = [];
        this.frames.forEach((item) => {
            frameDatas.push(item.exportData());
        });
        return frameDatas;
    }
    exportDataStoryLines() {
        const storyLinesDatas = [];
        this.storyLines.forEach((item) => {
            storyLinesDatas.push(item.exportData());
        });
        return storyLinesDatas;
    }
    loadOperaData(operaDataJson) {
        const Ob = JSON.parse(operaDataJson);
        if (!OperaData.CheckOperaDataStruct(Ob)) {
            throw `传入数据不符合 OperaData 结构要求。`;
        }
        const { name, author, version, hash, opera } = Ob;
        if ((0, util_1.compareVersion)(version, OperaData.Version) > 0) {
            throw `剧本版本 ${version} 大于当前 OperaData 解释器版本 ${OperaData.Version}，无法导入数据。`;
        }
        this.name = name;
        this.author = author;
        this.hash = hash;
        const { frames, storyLines, mainStoryLine } = opera;
        frames.forEach((frameData) => {
            const frame = new FrameBase_1.default(null, this, frameData);
            this.frames.push(frame);
            _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.FrameCreate, frame);
        });
        storyLines.forEach((storyLineData) => {
            const storyLine = new StoryLineBase_1.default(this, storyLineData);
            this.storyLines.push(storyLine);
        });
        this.todoDelegate();
        this.mainStoryLine = this.getStoryLineById(mainStoryLine);
        _1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.OperaDataMounted, this);
    }
    delegateUid2Ob(type, uid, toBase, toProp) {
        this.delegateQueue.push({
            type,
            uid,
            toBase,
            toProp,
        });
    }
    todoDelegate() {
        this.delegateQueue.forEach((item) => {
            if (item.type === OperaDataType_1.OperaDataType.Frame) {
                item.toBase[item.toProp] = this.getFrameById(item.uid);
            }
            else if (item.type === OperaDataType_1.OperaDataType.StoryLine) {
                item.toBase[item.toProp] = this.getStoryLineById(item.uid);
            }
        });
        this.delegateQueue = [];
    }
    registerOperaPlayerEventListener() { }
    static CheckOperaDataStruct(ob) {
        return (typeof ob.name === 'string' &&
            typeof ob.author === 'string' &&
            typeof ob.version === 'string' &&
            ob.opera &&
            ob.opera.frames &&
            ob.opera.storyLines &&
            typeof ob.opera.mainStoryLine === 'string');
    }
}
OperaData.Version = '1.0.5';
OperaData.eventEmitter = new EventEmitter_1.default();
exports.default = OperaData;
//# sourceMappingURL=OperaData.js.map