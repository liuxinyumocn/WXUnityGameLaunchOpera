import { OperaData } from "@libs/index";
import { FrameType } from "@libs/interface/FrameType";
const operaData = new OperaData();

/**
 *  微信小游戏启动剧情创作区
 *    请在下方区域创作剧情，并开启 `npm run dev` 
 *    使用微信开发者工具打开本仓库根目录 minigame 文件夹实时预览剧情内容；
 *    随时观察命令行窗口确保构建正确；
 *    同时支持 TypeScript 与 JavaScript 撰写。
 *
 *    剧情内容确认后执行 npm run build 完成剧本导出可放至正式版游戏工程内使用
 */
// ------------------ Start ------------------

/**
 *  剧情介绍：
 * 
 *    这是一个非常简单的演示用例，剧情开始瞬间呈现标准的微信小游戏橘色封面图图片，
 *    等待 CDN 视频加载至可播放状态后将开始播放视频内容，播放3秒后出现一个跳过按钮，
 *    用户可以在播放期间随时点击跳过按钮，当完整看完视频后剧情也将自动结束。
*/


// baseinfo
// 请填入游戏启动剧情名称
operaData.name = '演示剧情Demo';
// 请填入剧情撰写作者
operaData.author = 'WechatGameTeam';

// 主故事线
const storyLine = operaData.createStoryLine();

// 创建一个首帧渲染图组件
const firstFrameImage = operaData.createFrame(FrameType.createImage);
// 设置他的默认属性
firstFrameImage.setParams({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  url: 'images/background.jpg',   // 位于 src/images/background.jpg 文件，可以与 Unity 小游戏封面图相同
});
// 添加至主故事线中，意味着剧情启动后首先将执行 firstFrameImage 关键动作帧
storyLine.add(firstFrameImage);

// 创建一个跳过贴图按钮
const skipButton = operaData.createFrame(FrameType.createImage);
// 将其设置为屏幕右下角，高宽需要手动设置
skipButton.setParams({
  right: 30,
  bottom: 60,
  width: 173 / 1.5,
  height: 64 / 1.5,
  url: 'launchOperaPlay/skip.png',
  visible: true,
});
// 点击后则立即结束剧情
skipButton.setEvents({
  event: 'onClick',
  bind: [
    operaData.EndFrame,         // 结束剧情关键动作帧（特殊常量帧，可从 operaData 直接获得）
  ]
});
// 值得注意这里因为不希望启动的时候按钮就立即出现，所以不需要将 skipButton 挂载到主故事线
// 无需设置 => storyLine.add(skipButton);  不需要挂载主故事线

// 创建一个视频组件
const video0 = operaData.createFrame(FrameType.createVideo);
// 设置视频组件一些属性
video0.setParams({
  url: 'https://testcos.merge.qq.com/mini-mm-release/1.0.5/StreamingAssets/Movies/CG_Trim.mp4',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  autoPlay: true,               // 加载就绪后立即自动播放
  objectFit: 'contain'
});
// 当视频开始播放时隐藏掉 firstFrameImage
video0.setEvents({
  event: 'onPlay',
  bind:[                        // 当发生 onPlay 时触发一些关键动作帧

    // 创建一个用于设置 Param 的关键动作帧并同时为其设置属性
    operaData.createFrame(FrameType.setParam, {
      frame: firstFrameImage,   // 需要 setParam 的 frame
      param: 'visible',         // 需要变动的属性名
      value: false,             // 需要变动的属性值
    })

  ]
});
// 视频播放到第3秒时展现 skipButton
video0.setEvents({
  event: 'onPlayTimeAt',
  params: {
    sec: 3.0,
  },
  bind: [
    skipButton,                 // 达成该 video0 事件条件 此时 skipButton 才被挂载到剧情中
  ]
});


// 当视频结束后也就结束剧情
video0.setEvents({
  event: 'onEnded',
  bind: [
    operaData.EndFrame,         // 结束剧情关键动作帧（特殊常量帧，可从 operaData 直接获得）
  ]
});

// 将 video0 挂载到主故事线
storyLine.add(video0);


// ------------------ End ------------------
export default operaData;
