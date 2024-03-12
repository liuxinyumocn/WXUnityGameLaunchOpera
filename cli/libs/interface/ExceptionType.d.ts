export interface ExceptionStruct {
    type: ExceptionType;
    errmsg: string;
    err?: any;
}
export declare enum ExceptionType {
    Unknown = 0,
    Viewer = 1,
    Director = 2,
    Video = 3,
    Image = 4,
    Frame = 5,
    Report = 6,
    Audio = 7
}
