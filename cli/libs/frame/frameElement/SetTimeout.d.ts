import { FrameType } from '../../interface/FrameType';
import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class SetTimeout extends FrameElementBase {
    static readonly ParamsStruct: {
        timeout: {
            type: (FrameType | ParamInputType)[];
            desc: string;
        };
        cancel: {
            type: ParamInputType[];
            desc: string;
            default: boolean;
        };
    };
    static readonly EventsStruct: {
        onEnded: {
            desc: string;
        };
        onCancel: {
            desc: string;
        };
    };
    constructor(frame: FrameBase);
    cancel(): FrameBase;
}
