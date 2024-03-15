"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Frame_1 = require("../frame/Frame");
var StoryLine_1 = require("../frame/storyLine/StoryLine");
var FrameType_1 = require("../interface/FrameType");
var OperaData = (function () {
    function OperaData() {
        this.frames = new Array();
        this.storyLines = new Array();
        this.EndFrame = this.createFrame(FrameType_1.FrameType.end);
    }
    OperaData.prototype.createFrame = function (type, params, events) {
        var frame = new Frame_1.default(type, this);
        this.frames.push(frame);
        if (params) {
            this.setFrameParams(frame, params);
        }
        if (events) {
            this.setFrameEvents(frame, events);
        }
        return frame;
    };
    OperaData.prototype.setFrameParams = function (frame, param) {
        frame.setParams(param);
    };
    OperaData.prototype.setFrameEvents = function (frame, events) {
        frame.setEvents(events);
    };
    OperaData.prototype.createStoryLine = function () {
        var storyLine = new StoryLine_1.default();
        this.storyLines.push(storyLine);
        if (!this.mainStoryLine) {
            this.mainStoryLine = storyLine;
        }
        return storyLine;
    };
    OperaData.prototype.getFrameById = function (uid) {
        for (var _i = 0, _a = this.frames; _i < _a.length; _i++) {
            var frame = _a[_i];
            if (frame.getUid() === uid) {
                return frame;
            }
        }
        return null;
    };
    OperaData.prototype.exportData = function (baseInfo) {
        if (!this.mainStoryLine) {
            throw "\u8FD8\u672A\u521B\u5EFA\u4E3B\u6545\u4E8B\u7EBF\u8BF7\u6267\u884C .createStoryLine() \u521B\u5EFA\u3002";
        }
        var operaData = {
            name: (baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.name) || '',
            author: (baseInfo === null || baseInfo === void 0 ? void 0 : baseInfo.author) || '',
            version: '',
            opera: {
                frame: this.exportDataFrame(),
                storyLines: this.exportDataStoryLines(),
                mainStoryLine: this.mainStoryLine.getUid(),
            },
        };
        return JSON.stringify(operaData);
    };
    OperaData.prototype.exportDataFrame = function () {
        var frameDatas = new Array();
        this.frames.forEach(function (item) {
            frameDatas.push(item.exportData());
        });
        return frameDatas;
    };
    OperaData.prototype.exportDataStoryLines = function () {
        var storyLinesDatas = new Array();
        this.storyLines.forEach(function (item) {
            storyLinesDatas.push(item.exportData());
        });
        return storyLinesDatas;
    };
    return OperaData;
}());
exports.default = OperaData;
//# sourceMappingURL=OperaData.js.map