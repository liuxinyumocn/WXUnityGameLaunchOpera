"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../interface/EmitterType");
const FrameType_1 = require("../../interface/FrameType");
const ProgressType_1 = require("../../interface/ProgressType");
const ComponentBase_1 = require("../ComponentBase");
const UserHandler_1 = require("./UserHandler");
class Progress extends ComponentBase_1.default {
    constructor(director) {
        super(director);
        this.userHandler = new UserHandler_1.default(this);
        this.registerProgressEventListener();
    }
    created(operaData) {
        this.operaData = operaData;
        this.frontFrame = operaData.createFrame(FrameType_1.FrameType.createRect);
        this.backFrame = operaData.createFrame(FrameType_1.FrameType.createRect);
    }
    refresh() {
        const style = this.userHandler.style;
        if (style.hidden) {
            this.frontFrame.setParams({
                visible: false,
            });
            this.backFrame.setParams({
                visible: false,
            });
        }
        else {
            const pubStyle = {
                visible: true,
                width: '100%',
                height: style.height,
            };
            if (style.position === ProgressType_1.Position.bottom) {
                pubStyle.bottom = 0;
            }
            else {
                pubStyle.top = 0;
            }
            this.frontFrame.setParams(Object.assign(Object.assign({}, pubStyle), { color: style.color }));
            this.backFrame.setParams(Object.assign(Object.assign({}, pubStyle), { color: style.backgroundColor }));
        }
    }
    registerProgressEventListener() {
        ComponentBase_1.default.eventEmitter.registerEvent(this, (type, ...args) => {
            switch (type) {
                case EmitterType_1.ProgressCaseType.RefreshProgress:
                    this.refresh();
                    break;
            }
        });
    }
}
Progress.componentName = "progress";
exports.default = Progress;
//# sourceMappingURL=index.js.map