export declare class ProgressBar {
    private static stack;
    /**
     *
     * @param content
     * @param color black|red|green|yellow|blue|magenta|cyan|white|gray|grey
     * @param options
     */
    private handler;
    constructor(content: string, color: string, options: {
        width: number;
        total: number;
    });
    tick(value: number, options?: any): void;
}
