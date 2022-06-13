import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'encodeBase64'
})
export class EncodeBase64Pipe implements PipeTransform {

    transform(input: string, args?: any): any {

        // input ? decodeURIComponent(escape(window.atob(input))) : null;

        return input ? btoa(unescape(encodeURIComponent(input))) : null;


    }

}

@Pipe({
    name: 'decodeBase64'
})
export class DecodeBase64Pipe implements PipeTransform {

    transform(input: string, args?: any): any {

        // input ? decodeURIComponent(escape(window.atob(input))) : null;

        // console.log("input", input)
        // console.log("decodeURIComponent(input)", decodeURIComponent(input))
        // console.log("typeof input == string", typeof input == "string")
        // console.log("decodeURIComponent(input) !== input", decodeURIComponent(input) !== input)

        // var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

        // console.log(base64regex.test("SomeStringObviouslyNotBase64Encoded="))             // FALSE
        // console.log(base64regex.test("U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ="))   // TRUE

        // if (typeof input == "string" && decodeURIComponent(input) !== input) {

        //     console.log("if")
        //     return input && input != null ? decodeURIComponent(escape(window.atob(input))) : null;
        // }
        // else {
        //     console.log("else")
        //     return input || null;
        // }

        // return input && input != null ? decodeURIComponent(escape(window.atob(input))) : null;

        try {
            return input && input != null ? decodeURIComponent(escape(window.atob(input))) : null;
        } catch (err) {
            return input || null;
        }

    }

}