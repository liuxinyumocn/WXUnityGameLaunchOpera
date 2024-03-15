import FListener from './FListener';
export default class FileWatcher {
    private rootPath;
    private fListeners;
    constructor(rootPath: string);
    launch(): Promise<unknown>;
    addListner(listner: FListener): void;
    removeListner(listner: FListener): void;
    private pushChange;
    private pushAllChange;
}
