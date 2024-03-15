import { EventsStruct } from '../../interface/EventsType';
import OperaData from '../../operaDirector/OperaData';
import StoryLineBase from './StoryLineBase';
export default class StoryLine extends StoryLineBase {
    constructor(operaData: OperaData, event?: EventsStruct);
}
