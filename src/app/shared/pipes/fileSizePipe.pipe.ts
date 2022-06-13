import { Pipe, PipeTransform } from '@angular/core';

/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
*/
@Pipe({
    name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

    transform(input: any, args?: any): any {
        var exp, rounded,
            // suffixes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
            suffixes = ['KB', 'MB', 'GB', 'TB', 'PB'];

        if (Number.isNaN(input)) {
            return null;
        }

        if (input < 1000) {
            return input;
        }

        exp = Math.floor(Math.log(input) / Math.log(1000));

        return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];


    }

}