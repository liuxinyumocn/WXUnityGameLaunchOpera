import { Events, EventsStruct } from '../../interface/EventsType';
import { ParamStruct } from '../../interface/ParamType';
import FrameBase from '../FrameBase';
export default class FrameElementBase {
    [key: string]: any;
    private params;
    private eventsManager;
    protected frame: FrameBase;
    protected readonly paramsStruct: any;
    protected readonly eventsStruct: any;
    constructor(frame: FrameBase, paramsStruct?: any, eventsStruct?: any);
    actived(): void;
    setParams(params: any): void;
    getParam(name: string): ParamStruct;
    exportParams(): any;
    importParams(data: {
        [key: string]: ParamStruct;
    }): void;
    setEvent(event: Events): void;
    getEvents(eventName?: string): EventsStruct[];
    $emitEvent(event: EventsStruct): void;
    exportEvents(): EventsStruct[];
    importEvents(data: EventsStruct[]): void;
    getFrameBase(): FrameBase;
    private initParams;
    private getFrameUid;
}
