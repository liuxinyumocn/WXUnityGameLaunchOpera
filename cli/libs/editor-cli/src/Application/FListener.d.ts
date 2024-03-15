export default class FListener {
    subPath: string;
    private callback?;
    constructor(subPath: string);
    onChange(callback: Function): void;
    pushChange(): void;
}
