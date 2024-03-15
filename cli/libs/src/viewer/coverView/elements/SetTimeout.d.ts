import { FrameType } from '../../../interface/FrameType';
import { ParamStruct } from '../../../interface/ParamType';
import ElementBase from '../../base/ElementBase';
import { ElementInterface } from '../../base/ElementInterface';
export default class SetTimeout extends ElementBase implements ElementInterface {
    private timeoutHandler;
    static readonly ListenerFrameType: FrameType;
    constructor(...args: any[]);
    watch: {
        cancel: (value: ParamStruct, oldValue: ParamStruct) => void;
    };
    actived(): void;
}
