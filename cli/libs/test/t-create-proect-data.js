"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FrameType_1 = require("../interface/FrameType");
const OperaData_1 = __importDefault(require("../operaDirector/OperaData"));
const operaDirector_1 = __importDefault(require("../operaDirector"));
const ViewerCoverView_1 = __importDefault(require("../viewer/coverView/ViewerCoverView"));
const operaData = new OperaData_1.default();
const storyLineMain = operaData.createStoryLine();
const fVideoUrl = operaData.createFrame(FrameType_1.FrameType.var, {
    value: 'https://liuxinyumo.cn/phone.mp4',
});
const fMediaPhone = operaData.createFrame(FrameType_1.FrameType.media, {
    device: 'phone',
    var: fVideoUrl,
    value: 'https://liuxinyumo.cn/phone.mp4',
});
const fMediaPad = operaData.createFrame(FrameType_1.FrameType.media, {
    device: 'pad',
    var: fVideoUrl,
    value: 'https://liuxinyumo.cn/pad.mp4',
});
const fVideo = operaData.createFrame(FrameType_1.FrameType.createVideo, {
    url: fVideoUrl,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    autoPlay: true,
});
const fSkipButton = operaData.createFrame(FrameType_1.FrameType.createImage, {
    url: 'https://liuxinyumo.cn/skip.png',
    visible: false,
}, {
    event: 'onClick',
    bind: operaData.EndFrame,
});
const fShowSkipButton = operaData.createFrame(FrameType_1.FrameType.setParamSizeAndPosition, {
    right: 10,
    top: 10,
    width: 100,
    height: 70,
    frame: fSkipButton,
});
fVideo.setEvents({
    event: 'onPlayTimeAt',
    params: {
        sec: 3,
    },
    bind: fShowSkipButton,
});
const fActiveButton = operaData.createFrame(FrameType_1.FrameType.createImage, {
    url: 'https://liuxinyumo.cn/active.png',
    bottom: 20,
    left: '50%',
    width: 200,
    heigth: 120,
    visible: false,
});
const fFullScreenClickEvent = operaData.createFrame(FrameType_1.FrameType.createRect, {
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
}, {
    event: 'onClick',
    bind: operaData.EndFrame,
});
fVideo.setEvents({
    event: 'onPlayTimeAt',
    params: {
        sec: 5,
    },
    bind: [
        fVideo.element.pause(),
        fActiveButton.element.visible(true),
        fFullScreenClickEvent,
    ],
});
storyLineMain.add(fVideoUrl, fMediaPhone, fMediaPad, fVideo, fSkipButton, fActiveButton);
const operaDataJson = operaData.exportData();
const director = new operaDirector_1.default();
director.init(new ViewerCoverView_1.default(), operaDataJson);
//# sourceMappingURL=t-create-proect-data.js.map