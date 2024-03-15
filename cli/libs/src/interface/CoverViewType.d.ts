export interface DOMElement {
    uid: string;
    type: DOMElementType;
    src?: string;
}
export declare enum DOMElementType {
    video = 0,
    image = 1,
    view = 2
}
