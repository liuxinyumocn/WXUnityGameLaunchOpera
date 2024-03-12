import { ExceptionStruct } from './ExceptionType';
export interface ReportSysStruct {
    id: string;
    event?: string;
    status: ReportStatusType;
}
export declare enum ReportStatusType {
    start = 0,
    end = 1,
    checkPoint = 2,
    checkPointCount = 3
}
export interface ReportErrSysStryct {
    errinfo: ExceptionStruct;
}
