// import { OperaData } from "@tencent/minigame-launch-opera";
import { OperaData } from '@libs/index';

/**
 *  微信小游戏启动剧情创作区 
 *    请在下方区域创作剧情，并开启 npm run dev 使用微信开发者工具打开本仓库根目录 minigame 文件夹实时预览剧情内容；
 *    随时观察命令行窗口确保构建正确；
 *    同时支持 TypeScript 与 JavaScript 撰写。
*/
// ------------------ Start ------------------
const operaData = new OperaData();
const storyLine = operaData.createStoryLine();



// ------------------ End ------------------
export default operaData;
