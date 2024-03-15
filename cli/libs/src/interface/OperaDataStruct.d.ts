import { EventsStruct } from './EventsType';
import { FrameType } from './FrameType';
import { OperaDataType } from './OperaDataType';
import { ParamStruct } from './ParamType';
export interface OperaDataStruct {
    name: string;
    author: string;
    version: string;
    hash: string;
    opera: {
        frames: OperaDataFrameStruct[];
        storyLines: OpreaDataStoryLinesStruct[];
        mainStoryLine: string;
    };
}
export interface OperaDataFrameStruct {
    frameType: FrameType;
    uid: string;
    params: {
        [key: string]: ParamStruct;
    };
    events: EventsStruct[];
}
export interface OpreaDataStoryLinesStruct {
    uid: string;
    datas: {
        uid: string;
        type: OperaDataType;
    }[];
}
