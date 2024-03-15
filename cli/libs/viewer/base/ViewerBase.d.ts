import FrameBase from '../../frame/FrameBase';
import Director from '../../operaDirector';
import EventEmitter from '../../utils/EventEmitter';
import ElementBase from './ElementBase';
import { ViewerBaseInterface } from './ViewerBaseInterface';
export default class ViewerBase implements ViewerBaseInterface {
    static readonly eventEmitter: EventEmitter;
    readonly viewerElementsClass: (typeof ElementBase)[];
    protected dirctor: Director;
    protected elements: ElementBase[];
    protected frameMap: WeakMap<FrameBase, ElementBase>;
    constructor(viewerElementsClass: (typeof ElementBase)[]);
    setDirctor(dirctor: Director): void;
    getViewerElementByFrameBase(frame: FrameBase): ElementBase;
    private emitterTodoFrameCreate;
    private createViewer;
    mounted(): void;
    destory(): void;
    private registerDirctorEventListener;
}
