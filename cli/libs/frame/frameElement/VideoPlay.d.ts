import { FrameType } from '../../interface/FrameType';
import FrameBase from '../FrameBase';
import FrameElementBase from './FrameElementBase';
export default class VideoPlay extends FrameElementBase {
    static readonly ParamsStruct: {
        video: {
            type: FrameType;
            desc: string;
        };
    };
    constructor(frame: FrameBase);
    actived(): void;
}
