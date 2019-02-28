import * as ts from 'typescript';
export declare function getProgram(source: Record<string, string>, options: ts.CompilerOptions): ts.Program;
export declare const defaultOptions: ts.CompilerOptions;
export interface Failure {
    source: string;
    message: string;
}
export declare function check(sources: Record<string, string>, options: ts.CompilerOptions): Array<Failure>;