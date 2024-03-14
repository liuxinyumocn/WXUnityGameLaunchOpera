import Director from '../operaDirector';
import EventEmitter from '../utils/EventEmitter';
export default class Report {
    static readonly eventEmitter: EventEmitter;
    private director;
    protected startTimestamp: number;
    hash: string;
    constructor();
    bindDirector(director: Director): void;
    private registerReportEventListener;
    private reportScene;
    protected calCostTime(): number;
}
