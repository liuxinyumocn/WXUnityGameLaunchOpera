import ViewerBase from "../viewer/base/ViewerBase";
export default class Director {
    private varManager;
    private viewer;
    constructor(operaDataJson: string);
    play(): void;
    setViewer(viewer: ViewerBase): void;
    private loadOperaData;
    private static CheckOperaDataStruct;
}
