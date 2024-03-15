import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class SetParamSize extends FrameElementBase {
    static readonly ParamsStruct: {
        frame: {
            type: ParamInputType;
            desc: string;
        };
        width: {
            type: ParamInputType[];
            desc: string;
        };
        height: {
            type: ParamInputType[];
            desc: string;
        };
        scaleHeight: {
            type: ParamInputType;
            desc: string;
        };
        scaleWidth: {
            type: ParamInputType;
            desc: string;
        };
        opacity: {
            type: ParamInputType;
            desc: string;
        };
    };
    constructor(frame: FrameBase);
    actived(): void;
}
