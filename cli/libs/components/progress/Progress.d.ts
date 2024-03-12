import Director from '../../operaDirector';
import OperaData from '../../operaDirector/OperaData';
import ComponentBase from '../ComponentBase';
export default class Progress extends ComponentBase {
    static readonly componentName: string;
    private frontFrame;
    private backFrame;
    private operaData;
    constructor(director: Director);
    created(operaData: OperaData): void;
    private refresh;
    private registerProgressEventListener;
}
