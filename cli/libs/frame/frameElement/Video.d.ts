import { FrameType } from '../../interface/FrameType';
import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class Video extends FrameElementBase {
    static readonly ParamsStruct: {
        url: {
            type: (FrameType | ParamInputType)[];
            desc: string;
        };
        autoPlay: {
            type: ParamInputType;
            desc: string;
        };
        playing: {
            type: ParamInputType;
            desc: string;
            default: boolean;
        };
        objectFit: {
            type: (FrameType | ParamInputType)[];
            desc: string;
            default: string;
        };
        seek: {
            type: (FrameType | ParamInputType)[];
            desc: string;
            default: number;
        };
        loop: {
            type: ParamInputType;
            desc: string;
            default: boolean;
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
        onPlayTimeAt: {
            params: {
                sec: {
                    type: ParamInputType;
                    desc: string;
                };
            };
            desc: string;
        };
        onEnded: {
            desc: string;
        };
        onPlay: {
            desc: string;
        };
    };
    constructor(frame: FrameBase);
    pause(): FrameBase;
    play(): FrameBase;
    visible(value: boolean): FrameBase;
}
