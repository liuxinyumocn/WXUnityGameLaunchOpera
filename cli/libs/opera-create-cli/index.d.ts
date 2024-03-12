import { FrameType } from "../interface/FrameType";
declare class OperaData {
    private frames;
    constructor();
    createFrame(type: FrameType): void;
    exportData(): void;
}
export default OperaData;
