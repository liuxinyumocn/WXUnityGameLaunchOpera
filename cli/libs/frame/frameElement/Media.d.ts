import { FrameType } from '../../interface/FrameType';
import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class Media extends FrameElementBase {
    static readonly ParamsStruct: {
        device: {
            type: ParamInputType;
            desc: string;
            selectItems: string[];
        };
        var: {
            type: FrameType;
            desc: string;
        };
        value: {
            type: ParamInputType;
            desc: string;
        };
    };
    constructor(frame: FrameBase);
}
