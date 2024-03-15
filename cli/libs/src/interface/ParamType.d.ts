import { FrameType } from './FrameType';
export declare enum ParamInputType {
    String = "String",
    Selecet = "Selecet",
    Boolean = "Boolean",
    Number = "Number",
    None = "None",
    Percent = "Percent",
    Frame = "Frame"
}
export interface ParamStruct {
    value: any;
    type: ParamInputType;
    frameType?: FrameType;
}
export declare function checkParamType(value: any, type: ParamInputType | FrameType): checkParamInTypeRes | null;
export declare function checkParamInTypes(value: any, types: ParamInputType | FrameType | (ParamInputType | FrameType)[]): checkParamInTypeRes | null;
export interface checkParamInTypeRes {
    type: ParamInputType;
    frameType?: FrameType;
}
export declare function mergeParamsStructA2B(structA: any, structB: any): void;
export declare function checkParams(paramsStruct: any, params: any): any;
