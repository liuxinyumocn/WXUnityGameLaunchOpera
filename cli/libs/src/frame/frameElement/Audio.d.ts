import { FrameType } from '../../interface/FrameType';
import { ParamInputType } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class Audio extends FrameElementBase {
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
        seek: {
            type: (FrameType | ParamInputType)[];
            desc: string;
            default: number;
        };
        volume: {
            type: ParamInputType[];
            desc: string;
            default: number;
        };
        loop: {
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
}
