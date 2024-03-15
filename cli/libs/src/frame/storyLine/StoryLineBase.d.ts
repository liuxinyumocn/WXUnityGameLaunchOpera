import { EventsStruct } from '../../interface/EventsType';
import { OpreaDataStoryLinesStruct } from '../../interface/OperaDataStruct';
import { OperaDataType } from '../../interface/OperaDataType';
import OperaData from '../../operaDirector/OperaData';
import FrameBase from '../FrameBase';
export default class StoryLineBase {
    readonly TYPE = OperaDataType.StoryLine;
    private static UidIncIndex;
    protected datas: (FrameBase | StoryLineBase)[];
    protected readonly uid: string;
    protected operaData: OperaData;
    protected relatedEvent?: EventsStruct;
    constructor(operaData: OperaData, operaDataStoryLineData?: OpreaDataStoryLinesStruct);
    add(...args: (FrameBase | StoryLineBase)[]): void;
    getUid(): string;
    getRelatedEvent(): EventsStruct;
    private currentData;
    nextFrame(): FrameBase | StoryLineBase;
    play(): void;
    exportData(): OpreaDataStoryLinesStruct;
}
