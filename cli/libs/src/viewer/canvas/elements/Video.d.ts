import { FrameType } from '../../../interface/FrameType';
import ElementBase from '../../base/ElementBase';
import { ElementInterface } from '../../base/ElementInterface';
export default class Video extends ElementBase implements ElementInterface {
    static readonly ListenerFrameType: FrameType;
    watch: {
        playing: (value: any, oldValue: any) => boolean;
    };
    updated(params: {
        [key: string]: {
            value: any;
            oldValue: any;
        };
    }): void;
}
