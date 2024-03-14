import { FrameType } from '../../interface/FrameType';
import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class If extends FrameElementBase {
    static readonly ParamsStruct: {
        valueA: {
            type: (FrameType | ParamInputType)[];
            desc: string;
        };
        valueB: {
            type: (FrameType | ParamInputType)[];
            desc: string;
        };
    };
    static readonly EventsStruct: {
        isTrue: {
            desc: string;
        };
        isFalse: {
            desc: string;
        };
    };
    constructor(frame: FrameBase);
    actived(): void;
}
