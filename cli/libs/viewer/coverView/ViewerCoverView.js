"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterType_1 = require("../../interface/EmitterType");
const operaDirector_1 = require("../../operaDirector");
const ElementBase_1 = require("../base/ElementBase");
const ViewerBase_1 = require("../base/ViewerBase");
const DOM_1 = require("./DOM");
const Video_1 = require("./elements/Video");
const Audio_1 = require("./elements/Audio");
const Image_1 = require("./elements/Image");
const Rect_1 = require("./elements/Rect");
const Animation_1 = require("./elements/Animation");
const Report_1 = require("./elements/Report");
const CheckPoint_1 = require("./elements/CheckPoint");
const SetTimeout_1 = require("./elements/SetTimeout");
const ReportCheckPointCount_1 = require("./elements/ReportCheckPointCount");
class ViewerCoverView extends ViewerBase_1.default {
    constructor() {
        super(ViewerCoverView.ViewerElementsClass);
    }
    mounted() {
        console.log('[Launch Opera] Opera loaded all assets.');
        console.log('[Launch Opera] Init cover view documents.');
        DOM_1.default.loadXML().then(() => {
            operaDirector_1.default.eventEmitter.emit(this.dirctor, EmitterType_1.DirctorCaseType.ViewerReady);
            this.elements.forEach((item) => {
                ElementBase_1.default.eventEmitter.emit(item, EmitterType_1.ViewerElementBaseCaseType.DomReady);
            });
            DOM_1.default.showBody();
        });
    }
    destory() {
        this.elements.forEach((el) => {
            el.destory();
        });
        console.log('[Launch Opera] Opera viewer-coverview destory.');
        DOM_1.default.destory();
    }
}
ViewerCoverView.ViewerElementsClass = [
    Audio_1.default,
    Video_1.default,
    Image_1.default,
    Rect_1.default,
    Animation_1.default,
    Report_1.default,
    CheckPoint_1.default,
    SetTimeout_1.default,
    ReportCheckPointCount_1.default,
];
exports.default = ViewerCoverView;
//# sourceMappingURL=ViewerCoverView.js.map