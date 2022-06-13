import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Config } from 'src/app/config/config';

@Directive({
  selector: '[removeUnmatchedRegex]'
})
export class RemoveUnmatchedRegex {

  // @Input() regExp: any = Config.pattern.genericThree.regex;
  @Input() regExp: any = /[^a-zA-Z0-9-@._ ]/g;
  @Input() regExp2: any = [
    /[^a-zA-Z0-9-@._ ]/g
  ];

  constructor(
    private ngControl: NgControl
  ) { }

  get ctrl() {
    return this.ngControl.control;
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    console.log("RemoveUnmatchedRegex regExp", this.regExp);

    // e.preventDefault();
    if (this.regExp && this.ctrl.value) {
      // var matches1 = this.regExp.exec(this.ctrl.value);
      // // return matches1;
      // if (matches1) {
      //   this.ctrl.setValue(matches1[0]);
      // }
      // else {
      //   this.ctrl.setValue(null);
      // }
      var matches1 = this.ctrl.value.replace(this.regExp, '');
      this.ctrl.setValue(matches1);

      // if (this.regExp2.length > 0) {
      //   this.regExp2.forEach(element => {
      //     if (element) {
      //       var matches1 = this.ctrl.value.replace(element, '');
      //       this.ctrl.setValue(matches1);
      //     }

      //   });

      // }
    }
    else {
      // return;
    }
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    // e.preventDefault();
  }

  // @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
  //   e.preventDefault();
  // }

  // @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
  @HostListener('keydown', ['$event', '$event']) onKeydownHandler(event: KeyboardEvent, e) {
    // console.log("event", event);

    console.log("RemoveUnmatchedRegex regExp", this.regExp);
    if (this.regExp && this.ctrl.value) {
      // var matches1 = this.regExp.exec(this.ctrl.value);
      // // return matches1;
      // if (matches1) {
      //   this.ctrl.setValue(matches1[0]);
      // }
      // else {
      //   this.ctrl.setValue(null);
      // }


      var matches1 = this.ctrl.value.replace(this.regExp, '');
      this.ctrl.setValue(matches1);

      // if (this.regExp2.length > 0) {
      //   this.regExp2.forEach(element => {
      //     if (element) {
      //       var matches1 = this.ctrl.value.replace(element, '');
      //       this.ctrl.setValue(matches1);
      //     }

      //   });

      // }
    }
    else {
      // return;
    }

  }

  @HostListener('keyup', ['$event', '$event']) onKeyupHandler(e, event: KeyboardEvent) {
    console.log("RemoveUnmatchedRegex regExp", this.regExp);

    // console.log("event",event);
    if (this.regExp && this.ctrl.value) {
      // var matches1 = this.regExp.exec(this.ctrl.value);
      // // return matches1;
      // if (matches1) {
      //   this.ctrl.setValue(matches1[0]);
      // }
      // else {
      //   this.ctrl.setValue(null);
      // }

      var matches1 = this.ctrl.value.replace(this.regExp, '');
      this.ctrl.setValue(matches1);

      // if (this.regExp2.length > 0) {
      //   this.regExp2.forEach(element => {
      //     if (element) {
      //       var matches1 = this.ctrl.value.replace(element, '');
      //       this.ctrl.setValue(matches1);
      //     }

      //   });

      // }
    }
    else {
      // return;
    }

  }

  @HostListener("focus")
  onFocus(value) {
    // console.log("value", value);
    // this.ctrl.setValue(this.ctrl.value.toUpperCase());
  }

  @HostListener("blur")
  onBlur(value) {
    // console.log("value", value);
    console.log("RemoveUnmatchedRegex regExp", this.regExp);
    // this.ctrl.setValue(this.ctrl.value.toLowerCase());
    if (this.regExp && this.ctrl.value) {
      // var matches1 = this.regExp.exec(this.ctrl.value);
      // if (matches1) {
      //   this.ctrl.setValue(matches1[0]);
      // }
      // else {
      //   this.ctrl.setValue(null);
      // }
      // // return matches1;
      var matches1 = this.ctrl.value.replace(this.regExp, '');
      this.ctrl.setValue(matches1);

      // if (this.regExp2.length > 0) {
      //   this.regExp2.forEach(element => {
      //     if (element) {
      //       var matches1 = this.ctrl.value.replace(element, '');
      //       this.ctrl.setValue(matches1);
      //     }

      //   });

      // }
    }
    else {
      // return;
    }


  }
}