import { FrameType } from '../interface/FrameType';
import End from './frameElement/End';
export declare function GetFrameElementClass(frameType: FrameType): typeof End;
export declare function GetFrameElementParamsAndEventsStruct(frameType: FrameType): {
    paramsStruct: any;
    eventsStruct: any;
};
