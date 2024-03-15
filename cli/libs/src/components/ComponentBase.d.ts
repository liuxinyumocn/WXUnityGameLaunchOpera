import Director from '../operaDirector';
import OperaData from '../operaDirector/OperaData';
import EventEmitter from '../utils/EventEmitter';
export default class ComponentBase {
    static readonly componentName: string;
    static readonly eventEmitter: EventEmitter;
    protected director: Director;
    protected userHandler: any;
    constructor(director: Director);
    get handler(): any;
    created(operaData: OperaData): void;
    $update(): void;
}
