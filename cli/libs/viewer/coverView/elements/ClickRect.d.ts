import { FrameType } from "../../../interface/FrameType";
import ElementBase from "../../base/ElementBase";
import { ElementInterface } from "../../base/ElementInterface";
import { ParamStruct } from "../../../interface/ParamType";
export default class Rect extends ElementBase implements ElementInterface {
    static readonly ListenerFrameType: FrameType;
    private uid;
    private view;
    private first;
    constructor(...args: any[]);
    watch: {
        visible: (value: ParamStruct, oldValue: ParamStruct) => void;
    };
    created(): void;
    domMounted(): void;
    updated(params: {
        [key: string]: {
            value: any;
            oldValue: any;
        };
    }): void;
    actived(): void;
    private updatePositionAndSize;
}
