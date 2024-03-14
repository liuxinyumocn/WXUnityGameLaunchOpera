export default class EventEmitter {
    private events;
    constructor();
    registerEvent(obj: any, callback: Function): void;
    emit(obj: any, ...args: any[]): void;
}
