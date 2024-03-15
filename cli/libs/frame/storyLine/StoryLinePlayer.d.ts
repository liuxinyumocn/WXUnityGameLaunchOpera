import { OpreaDataStoryLinesStruct } from '../../interface/OperaDataStruct';
import OperaData from '../../operaDirector/OperaData';
import StoryLineBase from './StoryLineBase';
export default class StoryLinePlayer extends StoryLineBase {
    constructor(operaData: OperaData, operaDataStoryLineData?: OpreaDataStoryLinesStruct);
}
