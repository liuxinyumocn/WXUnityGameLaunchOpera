import { FrameType } from '../../interface/FrameType';
import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class Report extends FrameElementBase {
    static readonly ParamsStruct: {
        sceneId: {
            type: (FrameType | ParamInputType)[];
            desc: string;
        };
        dimension: {
            type: (FrameType | ParamInputType)[];
            desc: string;
        };
        metric: {
            type: (FrameType | ParamInputType)[];
            desc: string;
        };
    };
    static readonly EventsStruct: {};
    constructor(frame: FrameBase);
}
