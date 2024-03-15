import { FrameType } from '../../../interface/FrameType';
import ElementBase from '../../base/ElementBase';
import { ElementInterface } from '../../base/ElementInterface';
export default class Animation extends ElementBase implements ElementInterface {
    static readonly ListenerFrameType: FrameType;
    private isDestory;
    constructor(...args: any[]);
    actived(): void;
    destory(): void;
}
