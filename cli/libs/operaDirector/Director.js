"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var varManager_1 = require("./varManager/varManager");
var Director = (function () {
    function Director(operaDataJson) {
        this.loadOperaData(operaDataJson);
        this.varManager = new varManager_1.default();
    }
    Director.prototype.play = function () {
        if (!this.viewer) {
            throw "\u5F53\u524D Director \u8FD8\u672A\u6302\u8F7D Viewer \u65E0\u6CD5\u6267\u884C .play()\u3002";
        }
    };
    Director.prototype.setViewer = function (viewer) {
        this.viewer = viewer;
    };
    Director.prototype.loadOperaData = function (operaDataJson) {
        var Ob = JSON.parse(operaDataJson);
        if (!Director.CheckOperaDataStruct(Ob)) {
            throw "\u4F20\u5165\u6570\u636E\u4E0D\u7B26\u5408 OperaData \u7ED3\u6784\u8981\u6C42\u3002";
        }
    };
    Director.CheckOperaDataStruct = function (ob) {
        return (typeof ob.name === 'string' &&
            typeof ob.author === 'string' &&
            typeof ob.version === 'string' &&
            ob.opera && ob.frame && ob.storyLines &&
            Array.isArray(ob.opera.frame) &&
            Array.isArray(ob.opera.storyLines) &&
            typeof ob.opera.mainStoryLine === 'string');
    };
    return Director;
}());
exports.default = Director;
//# sourceMappingURL=Director.js.map