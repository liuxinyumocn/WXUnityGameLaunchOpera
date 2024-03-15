import { Component } from './env';
declare class DOM extends Component {
    private globalPrivate;
    private destoryed;
    constructor();
    loadXML(): Promise<unknown>;
    showBody(): void;
    getHandler(uid: string): any;
    destory(): void;
}
declare const _default: DOM;
export default _default;
