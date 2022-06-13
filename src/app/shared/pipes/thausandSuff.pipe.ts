import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'thousandSuff'
})
export class ThousandSuffixesPipe implements PipeTransform {

    transform(input: any, args?: any, args1?: boolean): any {
        var exp, rounded,
            suffixes = ['k', 'M', 'B', 'T', 'P', 'E'];

        console.log("Test===input", input);
        console.log("Test===args", args);
        console.log("Test===args", args);

        if (Number.isNaN(input)) {
            return null;
        }

        if (input < 1000) {
            if (!args1) {
                return input.toFixed(args);
            }
            else {
                return input;
            }
        }

        exp = Math.floor(Math.log(input) / Math.log(1000));

        console.log("Test===", (input / Math.pow(1000, exp)).toFixed(args));
        return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];


    }

}