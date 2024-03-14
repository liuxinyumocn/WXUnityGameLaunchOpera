"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../interface/EmitterType");
const ExceptionType_1 = require("../interface/ExceptionType");
const operaDirector_1 = __importDefault(require("../operaDirector"));
const EventEmitter_1 = __importDefault(require("../utils/EventEmitter"));
const common_1 = require("../utils/common");
class Report {
    constructor() {
        this.startTimestamp = 0;
        this.hash = '';
        this.startTimestamp = new Date().getTime();
        this.registerReportEventListener();
    }
    bindDirector(director) {
        this.director = director;
    }
    registerReportEventListener() {
        Report.eventEmitter.registerEvent(this, (type, ...args) => {
            switch (type) {
                case EmitterType_1.ReportCaseType.custom:
                    this.reportScene(args[0]);
                    break;
            }
        });
    }
    reportScene(data) {
        if (typeof (0, common_1.wx)().reportScene !== 'function') {
            const errInfo = {
                type: ExceptionType_1.ExceptionType.Report,
                errmsg: `自定义上报失败,当前基础库版本过低。`,
            };
            operaDirector_1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.Exception, errInfo);
            return;
        }
        (0, common_1.wx)().reportScene({
            sceneId: data.sceneId,
            dimension: !data.dimension ? {} : JSON.parse(data.dimension),
            metric: !data.metric ? {} : JSON.parse(data.metric),
            costTime: this.calCostTime(),
            fail: (res) => {
                const errInfo = {
                    type: ExceptionType_1.ExceptionType.Report,
                    errmsg: `自定义上报失败 sceneId: ${data.sceneId} dimension: ${data.dimension}`,
                    err: res,
                };
                operaDirector_1.default.eventEmitter.emit(this.director, EmitterType_1.DirctorCaseType.Exception, errInfo);
            },
        });
    }
    calCostTime() {
        return new Date().getTime() - this.startTimestamp;
    }
}
Report.eventEmitter = new EventEmitter_1.default();
exports.default = Report;
//# sourceMappingURL=Report.js.map