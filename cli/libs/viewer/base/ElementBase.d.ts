import FrameBase from '../../frame/FrameBase';
import { EventsStruct } from '../../interface/EventsType';
import { FrameType } from '../../interface/FrameType';
import { ParamStruct } from '../../interface/ParamType';
import EventEmitter from '../../utils/EventEmitter';
import { ElementInterface } from './ElementInterface';
import ViewerBase from './ViewerBase';
export default class ElementBase implements ElementInterface {
    static eventEmitter: EventEmitter;
    constructor(...args: any[]);
    static readonly ListenerFrameType: FrameType;
    protected readonly frame: FrameBase;
    protected readonly viewer: ViewerBase;
    protected $emit(event: EventsStruct): void;
    protected $update(): void;
    created(): void;
    updated(params: {
        [key: string]: {
            value: any;
            oldValue: any;
        };
    }): void;
    actived(): void;
    destory(): void;
    domMounted(): void;
    animation(style: {
        [key: string]: string | number | ParamStruct;
    }, animationInfo: {
        [key: string]: ParamStruct;
    }): Promise<unknown>;
    watch: {
        [key: string]: (value: any, oldValue: any) => void;
    };
    protected getEvents(eventName?: string): EventsStruct[];
    protected getParams(paramNames: string[] | string): {
        [key: string]: ParamStruct;
    };
    private registerViewerEventListener;
}
