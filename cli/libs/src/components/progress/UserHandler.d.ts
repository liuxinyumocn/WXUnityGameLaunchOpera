import { StyleStruct } from '../../interface/ProgressType';
import Progress from './Progress';
export default class UserHandler {
    private percentageValue;
    private progress;
    private styleValue;
    constructor(progress: Progress);
    get percentage(): number;
    set percentage(value: number);
    get style(): StyleStruct;
    set style(value: StyleStruct);
    private refresh;
}
