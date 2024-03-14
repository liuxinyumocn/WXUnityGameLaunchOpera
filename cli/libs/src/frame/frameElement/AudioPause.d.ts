import { FrameType } from '../../interface/FrameType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class AudioPause extends FrameElementBase {
    static readonly ParamsStruct: {
        audio: {
            type: FrameType;
            desc: string;
        };
    };
    constructor(frame: FrameBase);
    actived(): void;
}
