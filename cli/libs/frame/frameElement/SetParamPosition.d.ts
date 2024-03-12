import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class SetParamPosition extends FrameElementBase {
    static readonly ParamsStruct: {
        frame: {
            type: ParamInputType;
            desc: string;
        };
        top: {
            type: ParamInputType[];
            desc: string;
        };
        bottom: {
            type: ParamInputType[];
            desc: string;
        };
        left: {
            type: ParamInputType[];
            desc: string;
        };
        right: {
            type: ParamInputType[];
            desc: string;
        };
        visible: {
            type: ParamInputType;
            desc: string;
            default: boolean;
        };
    };
    constructor(frame: FrameBase);
    actived(): void;
}
