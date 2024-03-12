import { FrameType } from '../../../interface/FrameType';
import ElementBase from '../../base/ElementBase';
import { ElementInterface } from '../../base/ElementInterface';
export default class ReportCheckPointCount extends ElementBase implements ElementInterface {
    static readonly ListenerFrameType: FrameType;
    constructor(...args: any[]);
    actived(): void;
}
