declare class UIXml {
    private static uidInc;
    private DOMElements;
    private style;
    readonly idBody = "wx_lac_opera_body";
    constructor();
    addVideo(): string;
    addImage(src: string): string;
    addClickRect(): string;
    getXml(): string;
    getStyle(): {
        [key: string]: any;
    };
}
declare const _default: UIXml;
export default _default;
