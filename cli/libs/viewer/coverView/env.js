"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWxCommonFont = exports.getPrivateFileSystemManager = exports.instanceId = exports.setFileSpaceStatistics = exports.env = exports.xmlParser = exports.webviewLayout = exports.init = exports.create = exports.removePrivateThis = exports.getPrivateThis = exports.Component = exports.coverview = exports.gameTransfer = exports.document = exports.reportKeyValue = exports.canvas = exports.pluginWx = exports.wx = void 0;
const mgp_1 = __importDefault(require("@tencent/minigamefe/minigame/mgp"));
const common_1 = require("../../utils/common");
const { env } = mgp_1.default;
exports.env = env;
let innerWx;
let pluginWx;
let canvas;
let document;
let reportKeyValue;
let gameTransfer;
let coverview;
let Component;
let getPrivateThis;
let removePrivateThis;
let create;
let init;
let webviewLayout;
let xmlParser;
let setFileSpaceStatistics;
let instanceId;
let getPrivateFileSystemManager;
let getWxCommonFont;
if (env.isMiniGamePlugin) {
    const { pluginEnv } = env;
    const { customEnv } = pluginEnv;
    exports.wx = innerWx = env.wx;
    exports.canvas = canvas = customEnv.canvas;
    exports.document = document = customEnv.document;
    exports.instanceId = instanceId = pluginEnv.instanceId || '';
    exports.setFileSpaceStatistics = setFileSpaceStatistics = pluginEnv.setFileSpaceStatistics;
    exports.getPrivateFileSystemManager = getPrivateFileSystemManager = pluginEnv.getPrivateFileSystemManager;
    exports.coverview = coverview = pluginEnv.coverview;
    exports.getWxCommonFont = getWxCommonFont = pluginEnv.getWxCommonFont;
    if (coverview) {
        (exports.Component = Component = coverview.Component, exports.getPrivateThis = getPrivateThis = coverview.getPrivateThis, exports.removePrivateThis = removePrivateThis = coverview.removePrivateThis, exports.create = create = coverview.create, exports.init = init = coverview.init, exports.webviewLayout = webviewLayout = coverview.webviewLayout, exports.xmlParser = xmlParser = coverview.xmlParser);
    }
    else {
        exports.Component = Component = class Component {
        };
    }
}
else {
    exports.reportKeyValue = reportKeyValue = function () { };
    exports.gameTransfer = gameTransfer = function () { };
    exports.Component = Component = function Component() { };
    exports.getPrivateThis = getPrivateThis = function (context) {
        return context;
    };
    exports.instanceId = instanceId = '';
}
common_1.common.wx = innerWx;
//# sourceMappingURL=env.js.map