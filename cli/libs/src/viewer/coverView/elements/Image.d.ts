import { FrameType } from '../../../interface/FrameType';
import { ParamStruct } from '../../../interface/ParamType';
import ElementBase from '../../base/ElementBase';
import { ElementInterface } from '../../base/ElementInterface';
export default class Image extends ElementBase implements ElementInterface {
    static readonly ListenerFrameType: FrameType;
    private uid;
    private image;
    constructor(...args: any[]);
    watch: {
        visible: (value: ParamStruct, oldValue: ParamStruct) => void;
    };
    created(): void;
    domMounted(): void;
    actived(): void;
    updated(params: {
        [key: string]: {
            value: any;
            oldValue: any;
        };
    }): void;
    animation(style: {
        [key: string]: ParamStruct;
    }, animationInfo: {
        [key: string]: ParamStruct;
    }): Promise<unknown>;
    private updatePositionAndSize;
}
