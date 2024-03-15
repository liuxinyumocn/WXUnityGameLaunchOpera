import { Events, EventsStruct } from '../../../interface/EventsType';
import FrameElementBase from '../FrameElementBase';
export default class EventMananger {
    private frameBase;
    private events;
    private readonly eventsStruct;
    constructor(frameBase: FrameElementBase, eventsStruct: any);
    registerEvent(events: Events): void;
    getEvents(eventName?: string): EventsStruct[];
    exportEvents(): EventsStruct[];
    importEvents(data: EventsStruct[]): void;
    launchEvent(event: EventsStruct): void;
    private static EventCheck;
}
