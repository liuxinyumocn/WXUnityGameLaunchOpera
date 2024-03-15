import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class ReportCheckPointCount extends FrameElementBase {
    static readonly ParamsStruct: {
        num: {
            type: ParamInputType;
            desc: string;
        };
    };
    static readonly EventsStruct: {};
    constructor(frame: FrameBase);
}
