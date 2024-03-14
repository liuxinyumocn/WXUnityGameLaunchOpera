export declare enum LoggerType {
    BaseInfo = 0,
    ViewAction = 2,
    GlobalVarAction = 3
}
export interface LoggerEventStruct {
    t: LoggerType;
    l: LoggerMockAction | GlobalVarAction;
}
export interface LoggerMockAction {
    u: string;
    a: any;
}
export interface GlobalVarAction {
    n: string;
    v: string;
}
export interface LoggerRecordStruct {
    tm: number;
    e: LoggerEventStruct;
    i: number;
}
export declare enum RunningType {
    Record = 0,
    Execute = 1
}
