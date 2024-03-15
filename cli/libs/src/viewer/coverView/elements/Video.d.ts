import { FrameType } from '../../../interface/FrameType';
import { ParamStruct } from '../../../interface/ParamType';
import ElementBase from '../../base/ElementBase';
import { ElementInterface } from '../../base/ElementInterface';
export default class Video extends ElementBase implements ElementInterface {
    static readonly ListenerFrameType: FrameType;
    private uid;
    private video;
    private progressTime;
    private onProgressToPlay;
    private onWating;
    private playAtTimes;
    constructor(...args: any[]);
    watch: {
        playing: (value: ParamStruct, oldValue: ParamStruct) => void;
        visible: (value: ParamStruct, oldValue: ParamStruct) => void;
        objectFit: (value: ParamStruct, oldValue: ParamStruct) => void;
        seek: (value: ParamStruct, oldValue: ParamStruct) => void;
        loop: (value: ParamStruct, oldValue: ParamStruct) => void;
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
    private updatePositionAndSize;
    private nextPlayPosition;
    private checkPlayAtTimes;
    private get progress();
    private set progress(value);
}
