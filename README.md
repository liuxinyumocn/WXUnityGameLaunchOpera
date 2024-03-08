# 剧本自助生成文档及工具（微信小游戏启动剧情）

本仓库是自助设计启动剧情的 **剧情文件** 文档及工具，如需了解剧情的播放、接入能力请访问 [启动剧情](https://github.com/wechat-miniprogram/minigame-unity-webgl-transform/blob/main/Design/LaunchOpera.md) 能力主页。

## 1.文档说明

启动剧情能力上线初期微信小游戏团队希望更多开发者能够一定程度上自助接入该能力设计剧本，来减少人工协助带来的额外时间消耗，为此提供本指南及工具，游戏开发者通常可通过阅读指南与使用本工具自行完成剧本的设计并上线能力，如需帮助可联系[研发助手](/Design/IssueAndContact.md#小游戏研发助手)。

## 2.准备工作

- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- [Node.js (版本 >= 16.0.0)](https://nodejs.org/en/download/current)
- 将本仓库 clone 至本地
- 需要了解一些 JavaScript 的基本语法
- 一个专业的JavaScript代码编辑器（推荐 [VScode](https://code.visualstudio.com/download)、Sublime 等）

## 3.新手入门

如果你还没接触 Cli 开发模式，请跟随本教程直至你能在 **微信开发者工具** 中随意的预览你创作的剧情设计。

#### Step1 初始化项目
首次 clone 本仓库至本地后请在本仓库的根目录中执行命令行：

```sh
npm install
```

以此来安装该的项目必要的相关依赖包。

#### Step2 启动开发模式

依赖安装完成后，仍在仓库根目录执行命令行：

```sh
npm run dev
```

等待提示 `Starting compilation in watch mode...` 代表启动成功，此时仓库根目录应新生成名为 `minigame` 文件夹，**注意在调试期间请勿关闭该命令行，应使其始终保持活跃，直到结束剧本设计**。

#### Step3 预览默认剧情

使用 `微信开发者工具` 打开 `/minigame` 目录，AppID 请切换成当前登陆用户有开发权限的小游戏AppID，首次打开后会要求添加用于调试的小游戏插件，按照提示申请权限，如果一切正常，你将在工具完全载入资源后看到默认的启动剧情内容。

#### Step4 对剧本修改

可能与平时开发小程序/小游戏直接在 `微信开发者工具` 修改剧本不同的是，你无需修改 `/minigame` 目录中的任何资源，因为这是一个动态构建的产物，他会随着 `/src` 目录中的资源变化被不断覆盖。所以你真正需要修改的是 `/src` 中的代码资源。

接下来请你使用 JavaScript 代码编辑器打开本仓库目录（如 VSCode 打开），找到 `/src/opera/index.js` 脚本。

请修改脚本中大约第 31 行的 URL 文本地址为：

```js
// const videoUrl = `https://mm.wxcdn.cn/xxx`;   // 修改前
const videoUrl = `https://mm.wxcdn.cn/yyy`;   // 修改后
```

此时保存这个文件，如果你的 [Step2](#step2-启动开发模式) 中启动的开发模式还在工作，那么 `/minigame` 目录资源也将被实时更新，此时 `微信开发者工具` 也将重新加载游戏内容，你会看到被你刚刚修改的新的剧情内容。

#### Step5 导出剧本

当你对剧情设计完成，需要导出剧本给正式的游戏工程使用时，请回到 [Step2](#step2-启动开发模式) 中你开启的命令行窗口，Windows系统下使用 `Ctrl + C` MacOS 系统下使用 `control + C` 结束开发模式。

再次执行：

```sh
npm run build
```

等待程序执行结束后，你将在本仓库根目录看到 `/release` 目录，此时你可以将 release 目录内资源放到你的正式游戏工程导出的 minigame 目录下使用。

有关图片资源路径问题请阅读 [常见Q&A](#常见qa) 中说明。

至此你已经完成了一次很小变动的剧本导出工作。

#### Step6 尝试更多的模板

启动剧情能够设计很复杂的交互剧情内容，但是这对于初学者还需要阅读本文更多的内容，后续请查阅 [进阶指南](#4进阶指南)。如果你想快速应用场景，类似 [Step4](#step4-对剧本修改) 中这样仅修改属性值就可以替换成自己的游戏素材还是十分便捷。我们在 `/example` 提供了多款不同的模板，可以直接拿来使用。

默认剧情是 `/example/template-0` 中的模板，接下来请你将 `/example/template-1` 中的资源复制到 `/src/launchOpera` 目录中，重复 [Step2](#step2-启动开发模式) ~ [Step4](#step4-对剧本修改) 来预览你的修改！当然 `/example/template-X` 都是可以尝试。

## 4.进阶指南

如果模板还不能满足你的需要，请仔细阅读本节，你将学会设计复杂的剧情内容。

### 4.1 基本概念

在启动剧情中由两个剧本元素组成，分别是 **关键动作帧** 、**故事线**，关键动作帧更像是一个“函数”，核心在于执行到该帧时会引发某种动作，而故事线则是将多个独立的关键动作帧串联有序执行。

#### 4.1.1 关键动作帧

有关 关键动作帧 的种类，请查阅 [API速查](#5api速查) 。每个关键动作帧均有两个必要的组成部分：属性、事件。

##### 4.1.1.1 属性

属性是从关键动作帧激活的那一刻起被赋予其特定的值，属性决定了该帧的真实视图表现。例子：

```js
// 创建了一个 Image，并赋予了他一些初始化的属性
const skipButton = operaData.createFrame(FrameType.createImage, {
  url: `launchOpera/skip_button.png`,
  right: 25,
  bottom: 25,
  width: 100,
  height: 100,
});

// 也可以创建后再修改其属性，与上面的写法实际效果完全一样
const skipButton = operaData.createFrame(FrameType.createImage);
skipButton.setParams({
  url: `launchOpera/skip_button.png`,
  right: 25,
  bottom: 25,
  width: 100,
  height: 100,
});

// 注意设置属性是一个最终态的表现，也就意味着如下设置只有最后一个是生效的
skipButton.setParams({
  height: 100,  // 因下面设置会覆盖，因此该设置无效
});
skipButton.setParams({
  height: 101,  // 因下面设置会覆盖，因此该设置无效
});
skipButton.setParams({
  height: 102, // 因最后赋值则有效，skipButton 的 height 初始值则为 102
});
```

##### 4.1.1.2 事件

事件是对于不同关键动作帧存在不同的事件从而可以引发新的故事线的能力。比如 图片 可以存在被点击(onClick)的事件，视频组件存在开始播放(onPlay)、播放到第n秒时(onPlayTimeAt)、播放结束时(onEnded)等事件，当发生某种事件自然也就可以触发新的故事线内容。

其中，播放到第n秒时(onPlayTimeAt)，n 是一个可变系数，因此事件也是支持配置参数的。

例子：

```js
const video1 = operaData.createFrame(FrameType.createVideo, { ... });
// 设置多个不同的事件
// ①
video1.setEvents({
  event: 'onPlayTimeAt',
  params: {
    sec: 9,
  },
  bind: nextStoryLine,
});
// ②
video1.setEvents({
  event: 'onPlayTimeAt',
  params: {
    sec: 2,
  },
  keep: true,
  bind: [ skipButton ],
});
// ③
skipButton.setEvents({
  event: 'onClick',
  bind: [ operaData.EndFrame ]
});
```

上面的例子展示了实际应用的多种可能，首先是不同于 [属性](#4111-属性) 的后设置覆盖前设置特点，同名事件是支持创建多个并同时生效（对照① ②）。② 中使用了一个 keep 字段告诉剧情引擎该事件是反复有效，意味着实际运行时多次达到该事件条件都会引发该事件，而 ① ③ 没有设置 keep 发生一次事件后再达成条件也不会再次引发该事件。

再次观察 ① ② 的 bind，可以发现发生事件后执行的新的故事线其实可以存在多种表达方式，① 中是上下文中开发者自行创建的名为 `nextStoryLine` 故事线，有关故事线创建请阅读 [故事线](#412-故事线) 小节，而 ② 中是放了一个由 关键动作帧 组成的数组，这其实是一种匿名故事线。

最后 ③ 中的 `operaData.EndFrame` 实际上最特殊的关键动作帧，当执行到该帧后，启动剧情将立即结束。

#### 4.1.2 故事线



## 5.API速查


## 6.常见Q&A

#### 6.1 图片资源可以使用网络图片吗？
目前图片资源只能存放于小游戏 minigame 目录中，不可使用网络图片。

#### 6.2 为什么要放首帧图片（firstFramePic）
图片资源是跟随微信小游戏包上传至微信服务器，所以在小游戏主逻辑运行时，图片资源也处于就绪状态可以同步加载，因此玩家打开游戏时首帧将看到具体的游戏画面。而视频是存放在CDN的远程资源，不可避免的存在加载延迟问题，所以配置好首帧图片后，在视频可播放后再隐藏图片资源。

#### 6.3 如何保存自己的剧本？
你可以将本仓库 Fork 至自己 GitHub 名下，私有化后独立维护剧本创作。