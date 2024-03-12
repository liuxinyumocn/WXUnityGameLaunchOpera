import { FrameType } from '../interface/FrameType';
import OperaData from '../operaDirector/OperaData';
import FrameBase from './FrameBase';
export default class Frame extends FrameBase {
    constructor(type: FrameType, operaData: OperaData);
}
