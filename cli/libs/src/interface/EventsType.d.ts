import Frame from '../frame/Frame';
import FrameBase from '../frame/FrameBase';
import StoryLine from '../frame/storyLine/StoryLine';
import { OperaDataType } from './OperaDataType';
import { ParamStruct } from './ParamType';
export interface Events {
    event: string;
    params?: any;
    bind: Frame | StoryLine | (Frame | StoryLine)[];
    keep?: boolean;
}
export interface EventsStruct {
    event: string;
    params: {
        [key: string]: ParamStruct;
    };
    bind: EventsBindsStruct[];
    keep: boolean;
}
export interface EventsBindsStruct {
    type: OperaDataType;
    uid: string;
    ob?: FrameBase | StoryLine;
}
export declare function mergeEventsStructA2B(structA: any, structB: any): void;
