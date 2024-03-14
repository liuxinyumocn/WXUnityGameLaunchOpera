import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class Exception extends FrameElementBase {
    static readonly ParamsStruct: {
        throw: {
            type: ParamInputType;
            desc: string;
            default: boolean;
        };
    };
    static readonly EventsStruct: {
        catch: {
            desc: string;
        };
    };
    constructor(frame: FrameBase);
}
