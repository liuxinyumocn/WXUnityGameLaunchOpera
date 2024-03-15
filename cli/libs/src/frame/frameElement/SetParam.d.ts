import { FrameType } from '../../interface/FrameType';
import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class SetParam extends FrameElementBase {
    static readonly ParamsStruct: {
        frame: {
            type: ParamInputType;
            desc: string;
        };
        param: {
            type: (FrameType | ParamInputType)[];
            desc: string;
        };
        value: {
            type: (FrameType | ParamInputType)[];
            desc: string;
        };
    };
    static readonly EventsStruct: {};
    constructor(frame: FrameBase);
    actived(): void;
}
