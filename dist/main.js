"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors/safe");
const Multiprogress = require("multi-progress");
class ProgressBar {
    constructor(content, color, options) {
        this.handler = ProgressBar.stack.newBar(colors[color]('hello'), options);
    }
    tick(value, options) {
        this.handler.tick(value, options);
    }
}
ProgressBar.stack = new Multiprogress(process.stderr);
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJtYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVDO0FBQ3ZDLGdEQUFpRDtBQUdqRDtJQVNJLFlBQVksT0FBZSxFQUFFLEtBQWEsRUFBRSxPQUF5QztRQUNqRixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWEsRUFBRSxPQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOztBQWRjLGlCQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRDdELGtDQWdCQyJ9