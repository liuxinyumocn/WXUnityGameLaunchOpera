import { ParamStruct } from '../../interface/ParamType';
export interface ElementInterface {
    [key: string]: any;
    created?(): void;
    updated?(params: {
        [key: string]: {
            value: any;
            oldValue: any;
        };
    }): void;
    actived?(): void;
    destory?(): void;
    watch?: {
        [key: string]: WatchCallback;
    };
    domMounted?(): void;
    animation?(style: {
        [key: string]: string | number | ParamStruct;
    }, animationInfo: {
        [key: string]: ParamStruct;
    }): Promise<unknown>;
}
type WatchCallback = (value: any, oldValue: any) => void;
export {};
