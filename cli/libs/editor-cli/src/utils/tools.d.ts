/// <reference types="node" />
import * as fs_ from 'fs';
export declare const fs: typeof fs_;
export declare function copyFiles(sourceDir: string, targetDir: string, ignore?: RegExp): void;
export declare function isFileContentEqual(file1: string, file2: string): boolean;
export declare function deleteFolderRecursive(dir: string): void;
