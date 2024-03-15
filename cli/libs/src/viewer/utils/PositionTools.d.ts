export declare function calPositionAndSizeByParams(ob: any, ob2?: any): {
    [key: string]: any;
};
export declare function calPositionAndSize(ob: {
    [key: string]: any;
    width?: number | string;
    height?: number | string;
    left?: number | string;
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
}): {
    [key: string]: any;
    width: number;
    height: number;
    left: number;
    top: number;
    right: number;
    bottom: number;
    scaleHeight?: number;
    scaleWidth?: number;
    opacity?: number;
};
export declare function percentCal(per: number | string, fullValue: number): number;
export declare function isPercent(text: any): boolean;
export declare const PositionAndSizeKeys: string[];
export declare function isPositionAndSizeChange(param: {
    [key: string]: any;
}): boolean;
