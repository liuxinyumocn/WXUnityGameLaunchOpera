# 剧本自助生成文档及工具（微信小游戏启动剧情）

本仓库是自助设计启动剧情的 **剧情文件** 文档及工具，如需了解剧情的播放、接入能力请访问 [启动剧情](https://github.com/wechat-miniprogram/minigame-unity-webgl-transform/blob/main/Design/LaunchOpera.md) 能力主页。

## 文档说明

启动剧情能力上线初期微信小游戏团队希望更多开发者能够一定程度上自助接入该能力设计剧本，来减少人工协助带来的额外时间消耗，为此提供本指南及工具，游戏开发者通常可通过阅读指南与使用本工具自行完成剧本的设计并上线能力，如需帮助可联系[研发助手](/Design/IssueAndContact.md#小游戏研发助手)。

## 准备工作

- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- [Node.js (版本 >= 16.0.0)](https://nodejs.org/en/download/current)
- 将本仓库 clone 至本地
- 需要了解一些 JavaScript 的基本语法
- 一个专业的JavaScript代码编辑器（推荐 [VScode](https://code.visualstudio.com/download)、Sublime 等）

## 新手入门

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

## API速查


## 常见Q&A

#### 1.图片资源可以使用网络图片吗？
目前图片资源只能存放于小游戏 minigame 目录中，不可使用网络图片。

#### 2.为什么要放首帧图片（firstFramePic）
图片资源是跟随微信小游戏包上传至微信服务器，所以在小游戏主逻辑运行时，图片资源也处于就绪状态可以同步加载，因此玩家打开游戏时首帧将看到具体的游戏画面。而视频是存放在CDN的远程资源，不可避免的存在加载延迟问题，所以配置好首帧图片后，在视频可播放后再隐藏图片资源。

#### 3.如何保存自己的剧本？
你可以将本仓库 Fork 至自己 GitHub 名下，私有化后独立维护剧本创作。