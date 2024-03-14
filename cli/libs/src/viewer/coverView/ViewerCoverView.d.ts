import ElementBase from '../base/ElementBase';
import ViewerBase from '../base/ViewerBase';
export default class ViewerCoverView extends ViewerBase {
    static readonly ViewerElementsClass: (typeof ElementBase)[];
    constructor();
    mounted(): void;
    destory(): void;
}
