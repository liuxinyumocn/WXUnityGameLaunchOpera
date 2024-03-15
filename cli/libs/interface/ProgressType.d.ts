export declare enum Position {
    top = 0,
    bottom = 1
}
export interface StyleStruct {
    [key: string]: any;
    position?: Position;
    hidden?: boolean;
    color?: string;
    backgroundColor?: string;
    height?: number;
}
