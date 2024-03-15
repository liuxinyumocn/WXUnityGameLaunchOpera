export interface ViewerBaseInterface {
    [key: string]: any;
    mounted?(): void;
    destory?(): void;
}
