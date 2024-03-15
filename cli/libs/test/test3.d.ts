declare class AA {
    [Symbol.toPrimitive](hint: string): string;
}
declare const a: AA;
