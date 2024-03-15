import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class VarString extends FrameElementBase {
    static readonly ParamsStruct: {
        value: {
            type: ParamInputType;
            desc: string;
        };
        globalName: {
            type: ParamInputType;
            desc: string;
        };
    };
    constructor(frame: FrameBase);
    toString(): any;
}
