import { Events } from '../interface/EventsType';
import { FrameType } from '../interface/FrameType';
import { OperaDataFrameStruct } from '../interface/OperaDataStruct';
import { OperaDataType } from '../interface/OperaDataType';
import OperaData from '../operaDirector/OperaData';
import EventEmitter from '../utils/EventEmitter';
import FrameElementBase from './frameElement/FrameElementBase';
export default class FrameBase {
    static readonly eventEmitter: EventEmitter;
    readonly TYPE = OperaDataType.Frame;
    private static UidIncIndex;
    protected readonly uid: string;
    private frameType;
    protected operaData: OperaData;
    readonly element: FrameElementBase;
    constructor(type: FrameType | null, operaData: OperaData, operaDataFrameData?: OperaDataFrameStruct);
    getUid(): string;
    getFrameType(): FrameType;
    getOperaData(): OperaData;
    setParams(params: any): void;
    setEvents(events: Events): any;
    exportData(): OperaDataFrameStruct;
    private registerElementEventListener;
    private static proxyFunc;
    play(): void;
    nextFrame(): FrameBase;
    toString(): string;
}
