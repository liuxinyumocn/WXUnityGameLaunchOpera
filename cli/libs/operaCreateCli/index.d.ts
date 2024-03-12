import Frame from "../frame/Frame";
import FrameBase from "../frame/FrameBase";
import StoryLine from "../frame/storyLine/StoryLine";
import { FrameType } from "../interface/FrameType";
declare class OperaData {
    private frames;
    private storyLines;
    private mainStoryLine;
    readonly EndFrame: Frame;
    constructor();
    createFrame(type: FrameType, params?: any, events?: any): Frame;
    setFrameParams(frame: Frame, param: any): void;
    setFrameEvents(frame: Frame, events: any): void;
    createStoryLine(): StoryLine;
    getFrameById(uid: string): FrameBase;
    exportData(baseInfo?: {
        name?: string;
        author?: string;
    }): string;
    private exportDataFrame;
    private exportDataStoryLines;
}
export default OperaData;
