import { FrameType } from '../../../interface/FrameType';
import { ParamStruct } from '../../../interface/ParamType';
import ElementBase from '../../base/ElementBase';
import { ElementInterface } from '../../base/ElementInterface';
export default class Audio extends ElementBase implements ElementInterface {
    static readonly ListenerFrameType: FrameType;
    private audio;
    private progressTime;
    private onProgressToPlay;
    private onWating;
    private playAtTimes;
    constructor(...args: any[]);
    watch: {
        playing: (value: ParamStruct, oldValue: ParamStruct) => void;
        seek: (value: ParamStruct, oldValue: ParamStruct) => void;
        loop: (value: ParamStruct, oldValue: ParamStruct) => void;
    };
    created(): void;
    actived(): void;
    destory(): void;
    private get progress();
    private set progress(value);
    private nextPlayPosition;
    private checkPlayAtTimes;
}
