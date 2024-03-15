// import { OperaData } from "@tencent/minigame-launch-opera";
import { OperaData } from "@libs/index";
import { FrameType } from "@libs/interface/FrameType";

/**
 *  微信小游戏启动剧情创作区
 *    请在下方区域创作剧情，并开启 npm run dev 使用微信开发者工具打开本仓库根目录 minigame 文件夹实时预览剧情内容；
 *    随时观察命令行窗口确保构建正确；
 *    同时支持 TypeScript 与 JavaScript 撰写。
 *
 *    剧情内容确认后执行 npm run build 完成剧本导出可放至正式版游戏工程内使用
 */

// ------------------ Start ------------------
const operaData = new OperaData();

// baseinfo
// 请填入游戏启动剧情名称
operaData.name = '魔魔打勇士';
// 请填入剧情撰写作者
operaData.author = '';

const storyLine = operaData.createStoryLine();

const imgRoot = "launchOperaPlay/";

const var_GC_GUIDE_STEP = operaData.createFrame(FrameType.var, {
  value: "0",
  globalName: "GC_GUIDE_STEP",
});

const var_GC_ENTER_GAME = operaData.createFrame(FrameType.var, {
  value: "0",
  globalName: "GC_ENTER_GAME",
});

const var_GC_GUIDE_STEP_to_1 = operaData.createFrame(FrameType.setParam, {
  frame: var_GC_GUIDE_STEP,
  param: "value",
  value: "1",
});

const var_GC_GUIDE_STEP_to_2 = operaData.createFrame(FrameType.setParam, {
  frame: var_GC_GUIDE_STEP,
  param: "value",
  value: "2",
});

const var_GC_GUIDE_STEP_to_3 = operaData.createFrame(FrameType.setParam, {
  frame: var_GC_GUIDE_STEP,
  param: "value",
  value: "3",
});

/**
     *  上报
     *  上送日志：
        开始播放第一段剧情时候， 上送1001
        开始播放第二段剧情， 上送1002
        第二段剧情如果点击跳过， 上送1003
        开始播放第三段剧情时候， 上送1004
        第三段剧情点击跳过         上送1005
        播放第四段剧情               上送1006
        剧情播放结束 上送1007
     */
const report_1001 = operaData.createFrame(FrameType.report, {
  sceneId: "1001",
});
const report_1002 = operaData.createFrame(FrameType.report, {
  sceneId: "1002",
});
const report_1003 = operaData.createFrame(FrameType.report, {
  sceneId: "1003",
});
const report_1004 = operaData.createFrame(FrameType.report, {
  sceneId: "1004",
});
const report_1005 = operaData.createFrame(FrameType.report, {
  sceneId: "1005",
});
const report_1006 = operaData.createFrame(FrameType.report, {
  sceneId: "1006",
});
const report_1007 = operaData.createFrame(FrameType.report, {
  sceneId: "1007",
});

const startImg = operaData.createFrame(FrameType.createImage, {
  url: `${imgRoot}loginlogo.png`,
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
});

const hideBg = operaData.createFrame(FrameType.setParamPosition, {
  visible: false,
  frame: startImg,
});

const skipButton = operaData.createFrame(FrameType.createImage, {
  url: `${imgRoot}ui_guide_jump.png`,
  right: 25,
  bottom: 25,
  width: 103 / 1.5,
  height: 115 / 1.5,
});

const video1 = operaData.createFrame(
  FrameType.createVideo,
  {
    url: "https://cdn-mmd-cn.ajae61.com/Guide/Guide_1.0_001.mp4",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    autoPlay: true,
    objectFit: "contain",
  },
  [
    {
      event: "onPlay",
      bind: [hideBg, var_GC_GUIDE_STEP_to_1, report_1001],
    },
    // {
    //   event: 'onPlayTimeAt',
    //   params: {
    //     sec: 2,
    //   },
    //   bind: skipButton.element.visible(true),
    // },
  ]
);

const video2 = operaData.createFrame(
  FrameType.createVideo,
  {
    url: "https://cdn-mmd-cn.ajae61.com/Guide/Guide_1.0_002.mp4",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    autoPlay: true,
    objectFit: "contain",
  },
  [
    {
      event: "onPlay",
      bind: [var_GC_GUIDE_STEP_to_2, report_1002],
    },
    {
      event: "onPlayTimeAt",
      params: {
        sec: 2,
      },
      bind: skipButton.element.visible(true),
    },
  ]
);

const video2Pause = operaData.createFrame(FrameType.pauseVide, {
  video: video2,
});

video1.setEvents({
  event: "onEnded",
  bind: [video1.element.visible(false), video2],
});

const skipButton2 = operaData.createFrame(FrameType.createImage, {
  url: `${imgRoot}ui_guide_jump.png`,
  right: 25,
  bottom: 25,
  width: 103 / 1.5,
  height: 115 / 1.5,
});

const video3 = operaData.createFrame(
  FrameType.createVideo,
  {
    url: "https://cdn-mmd-cn.ajae61.com/Guide/Guide_1.0_003.mp4",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    autoPlay: true,
    objectFit: "contain",
  },
  [
    // {
    //   event: 'onEnded',
    //   bind: operaData.EndFrame,
    // },
    // {
    //   event: 'onPlayTimeAt',
    //   params: {
    //     sec: 3,
    //   },
    //   bind: skipButton.element.visible(true),
    // },
    {
      event: "onPlay",
      bind: [
        var_GC_GUIDE_STEP_to_3,
        skipButton.element.visible(false),
        report_1004,
      ],
    },
  ]
);

video2.setEvents({
  event: "onEnded",
  bind: [video2.element.visible(false), video3],
});

skipButton.setEvents({
  event: "onClick",
  bind: [video2Pause, video2.element.visible(false), video3, report_1003],
});

video3.setEvents({
  event: "onPlayTimeAt",
  params: {
    sec: 2,
  },
  bind: [skipButton2],
});

video3.setEvents({
  event: "onPlayTimeAt",
  params: {
    sec: 9,
  },
  bind: [skipButton2.element.visible(false)],
});

const video3Pause = operaData.createFrame(FrameType.pauseVide, {
  video: video3,
});

const video4 = operaData.createFrame(
  FrameType.createVideo,
  {
    url: "https://cdn-mmd-cn.ajae61.com/Guide/Guide_1.0_004.mp4",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    autoPlay: true,
    objectFit: "contain",
  },
  [
    // {
    //   event: 'onEnded',
    //   bind: operaData.EndFrame,
    // },
    // {
    //   event: 'onPlayTimeAt',
    //   params: {
    //     sec: 3,
    //   },
    //   bind: skipButton.element.visible(true),
    // },
    {
      event: "onPlay",
      bind: [
        var_GC_GUIDE_STEP_to_3,
        skipButton2.element.visible(false),
        report_1006,
      ],
    },
  ]
);

const goonVideo4 = operaData.createFrame(
  FrameType.if,
  {
    valueA: var_GC_ENTER_GAME,
    valueB: "0",
  },
  [
    {
      event: "isFalse",
      bind: [report_1007, operaData.EndFrame],
    },
    {
      event: "isTrue",
      bind: [video4],
    },
  ]
);

video3.setEvents({
  event: "onEnded",
  bind: [video3.element.visible(false), goonVideo4],
});

const video4Seek0 = operaData.createFrame(FrameType.setParam, {
  frame: video4,
  param: "seek",
  value: "0",
});

const checkLoop = operaData.createFrame(
  FrameType.if,
  {
    valueA: var_GC_ENTER_GAME,
    valueB: "0",
  },
  [
    {
      event: "isTrue",
      bind: [video4Seek0, video4.element.play()],
      keep: true,
    },
    {
      event: "isFalse",
      bind: [report_1007, operaData.EndFrame],
      keep: true,
    },
  ]
);

video4.setEvents({
  event: "onEnded",
  bind: [checkLoop],
  keep: true,
});

skipButton2.setEvents({
  event: "onClick",
  bind: [video3Pause, video3.element.visible(false), goonVideo4, report_1005],
});
storyLine.add(var_GC_GUIDE_STEP, startImg, video1);

// ------------------ End ------------------
export default operaData;
