import { DOCUMENT } from '@angular/common';
import {
  AfterViewChecked,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appCardNo]',
})
export class CardNoDirective implements AfterViewChecked {
  private regex: RegExp = new RegExp(/^[0-9]+$/);
  @ViewChild('ipt', { static: true, read: ElementRef })
  input: ElementRef<HTMLInputElement>;
  @Input('di') params: string;
  constructor(
    @Inject(DOCUMENT) document: Document,
    private el: ElementRef,
    private re: Renderer2
  ) {}

  ngAfterViewChecked() {
    // This doesn't work. value at this point is an empty string.
    // console.log('ng', document.getElementById("inp").);
    // let value = this.el.nativeElement.value.split('');
    // value = value
    //   .join('') //.match(new RegExp(".{1,4}", "g")).join(" ");
    //   //remove everithing except digits
    //   .replace(/[^0-9]+/g, '')
    //   // limit input to 16 digits
    //   .replace(/(.{16}).*$/, '$1')
    //   // insert " " between groups of digits
    //   .replace(/^(.?.?.?.?)(.?.?.?.?)(.?.?.?.?)(.?.?.?.?)$/, '$1 $2 $3 $4')
    //   // remove exescive " " at th.e end
    //   .trim();
    // this.re.setProperty(this.el.nativeElement, 'value', value);
    //console.log(value);
  }
  key: any;
  @HostListener('input', ['$event'])
  @HostListener('keydown', ['$event'])
  clickEvent(event) {
    //console.log(event);
    if (event instanceof KeyboardEvent) {
      this.key = event.key;
    } else {
      const element = event.target;
      let caret = element.selectionStart;
      let value = element.value.split('');
      // if(String(event.key).match(this.regex)) {
      //   value = element.value.concat(event.key).split('');
      // }
      //value = (event.target.value + '' + event.key).split('');

      console.log(caret);

      //console.log(this.key)
      // update value and caret around delimiters
      if (
        (caret === 5 || caret === 10 || caret === 15) &&
        this.key !== 'Delete' &&
        this.key !== 'Backspace'
      ) {
        //console.log('car')
        ++caret;
      } else if (
        (caret === 4 || caret === 9 || caret === 14) &&
        this.key === 'Backspace'
      ) {
        value.splice(caret - 1, 1);
        caret--;
        console.log('clld1');
      } else if (
        (caret === 4 || caret === 9 || caret === 14) &&
        this.key === 'Delete'
      ) {
        value.splice(caret, 1);
        console.log('clld2');
      }
      //console.log(key.length === 1 && /[^0-9]/.test(key));
      // update caret for non-digits
      if (this.key.length === 1 && /[^0-9]/.test(this.key)) caret--;

      value = value
        .join('') //.match(new RegExp(".{1,4}", "g")).join(" ");
        //remove everithing except digits
        .replace(/[^0-9]+/g, '')
        // limit input to 16 digits
        .replace(/(.{12,16}).*$/, '$1')
        // insert " " between groups of digits
        .match(new RegExp('.{1,4}', 'g'))
        .join(' ')
        // remove exescive " " at th.e end
        .trim();
      //console.log(value);
      //this.re.setProperty(this.el.nativeElement, 'value', value);
      // event.srcElement.value = value;
      this.el.nativeElement.value = value;
      // "setTimeout" to update caret after setValue

      element.setSelectionRange(caret, caret);
    }
  }
}
