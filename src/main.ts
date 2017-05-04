import colors = require('colors/safe');
import Multiprogress = require("multi-progress");


export class ProgressBar {
    private static stack = new Multiprogress(process.stderr);
    /**
     * 
     * @param content 
     * @param color black|red|green|yellow|blue|magenta|cyan|white|gray|grey
     * @param options 
     */
    private handler;
    constructor(content: string, color: string, options: { width: number, total: number }) {
        this.handler = ProgressBar.stack.newBar(colors[color](content), options);
    }

    tick(value: number, options?: any) {
        this.handler.tick(value, options);
    }
}