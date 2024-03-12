import { FrameType } from '../../interface/FrameType';
import { ParamInputType } from '../../interface/ParamType';
export declare const PostionStruct: {
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
export declare const SizeStruct: {
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
export declare const AnimationStruct: {
    duration: {
        type: (FrameType | ParamInputType)[];
        desc: string;
    };
    easing: {
        type: (FrameType | ParamInputType)[];
        desc: string;
    };
};
