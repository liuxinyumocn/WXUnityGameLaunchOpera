import Director from '.';
import FrameBase from '../frame/FrameBase';
import StoryLineBase from '../frame/storyLine/StoryLineBase';
import { EventsStruct } from '../interface/EventsType';
import OperaData from './OperaData';
export default class OperaPlayer extends OperaData {
    private currentRuntime;
    private collectsParams;
    constructor(operaDataJson: string, director: Director);
    setGlobalVar(globalName: string, value: string): void;
    getGlobalVar(globalName: string): string;
    getCurrentStoryLine(): StoryLineBase;
    nextFrame(): boolean;
    protected registerOperaPlayerEventListener(): void;
    protected updateRunttimeFrame(frame: FrameBase): void;
    protected todoEventLaunch(event: EventsStruct): void;
    private getBindEventOb;
    private collectChangedParams;
    pushCollectChangedParams(): void;
}
