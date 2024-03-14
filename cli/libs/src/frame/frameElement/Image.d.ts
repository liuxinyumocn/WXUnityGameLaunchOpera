import { FrameType } from '../../interface/FrameType';
import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class Image extends FrameElementBase {
    static readonly ParamsStruct: {
        url: {
            type: (FrameType | ParamInputType)[];
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
    static readonly EventsStruct: {
        onClick: {
            desc: string;
        };
    };
    constructor(frame: FrameBase);
    visible(value: boolean): FrameBase;
}
