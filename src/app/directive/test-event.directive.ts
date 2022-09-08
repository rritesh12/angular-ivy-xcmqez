import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestEvent]',
})
export class TestEventDirective {
  private regex: RegExp = new RegExp(/^[0-9]+$/);
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];
  constructor(private er: ElementRef) {}

  @HostListener('keydown', ['$event'])
  clickEvent(event) {
    var ss, se, obj;
    obj = this.er.nativeElement;
    ss = obj.selectionStart;
    se = obj.selectionEnd;
  
    var curr = obj.value;
  
    var foo =  this.er.nativeElement.value.split("-").join(""); // remove hyphens
    if (foo.length > 0) {
      foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
    }
  
    if (((curr.length % 5 == 0) && ss == se && ss == curr.length) || (ss == se && (ss % 5 == 0))) {
      ss += 1;
      se += 1;
    }
  
    if (curr != foo) {
      this.er.nativeElement.value = foo;
      obj.selectionStart = ss;
      obj.selectionEnd = se;
    }

    // console.log(event.key);
    // if (
    //   event.key == 8 || //alert('backspace')
    //   event.key == 46
    // )
    //   //alert('delete')
    //   return;
    // if (this.specialKeys.indexOf(event.key) !== -1) {
    //   return;
    // }
    // const { selectionStart } = this.er.nativeElement;
    // console.log(selectionStart);
    // var numbers = /^[0-9]+$/;

    // let current: string = this.er.nativeElement.value;
    // var thenum = current.replace(/[^0-9]/g, '');
    // //console.log(thenum);
    // let next: string = thenum.concat(event.key);
    // var p;
    // var r = thenum.split(' ').join('');
    // console.log(r.match(new RegExp('\\d{1,4}', 'g')));
    // if (+r.length > 0) {
    //   this.er.nativeElement.value = r
    //     .match(new RegExp('\\d{1,4}', 'g'))
    //     .join(' ');
    // }

    // if (selectionStart < thenum.length - 1) {
    //   this.er.nativeElement.setSelectionRange(
    //     selectionStart,
    //     selectionStart,
    //     'none'
    //   );
    // }
    //console.log(!String(next).match(this.regex));
    // if (next && !String(next).match(this.regex)) {
    //   event.preventDefault();
    // }
    // if (+thenum.length >= 16) {
    //   console.log('dir click');
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // if (+r.length > 0) {
    //   this.er.nativeElement.value = r
    //     .match(new RegExp('\\d{1,4}', 'g'))
    //     .join(' ');
    // }
  }
}
