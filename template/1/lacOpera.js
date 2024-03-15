// lacOpera 配置脚本
// 等同于 game.js 尾部追加代码
const useLacOpera = Math.random() < 1;  // 100% 概率首次启动使用微信启动剧情
var play = false;
GameGlobal.events.on("launchOperaInit", (operaHandler) => {

  var localNewUser = true;
  try {
    localNewUser = !wx.getStorageSync('launchOperaLocalData');
  }catch(e){ }
  if (localNewUser && useLacOpera) {
    play = true;
  }
  operaHandler.config = { // 配置本地剧本路径，若 playPath 文件不存在或读取失败则自动放弃启动剧情
    playPath: play ? '/launchOperaPlay/operaPlay.obj' : null,
    progressStyle: {
          hidden: true,
    },
    useCustomProgress :false,
  }
  wx.reportScene({
    sceneId: 1008,
    dimension: {
      wxLacOpera: play ? 'true' : 'false',
    },
  });
  operaHandler.onEnd((logger) => {
    console.log('剧情播放结束');
  })

  operaHandler.onErr((err) => {
    console.error('启动剧情发生异常', err);
    operaHandler.end();       // 发生异常时强制结束，避免用户无法退出剧情插件模式
  })
});
