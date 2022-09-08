import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  transform(cardNumber: string, visibleDigits?: number): any {
    //console.log(cardNumber);
    // let trimmed = cardNumber.replace(/\s+/g, '');
    // if (trimmed.length > 16) {
    //   trimmed = trimmed.substr(0, 16);
    // }

    // let numbers = [];
    // for (let i = 0; i < trimmed.length; i += 4) {
    //   numbers.push(trimmed.substr(i, 4));
    // }
    // return numbers.join(' ');

    var splits = visibleDigits + ''.slice(0, 1);
    var r = cardNumber.split(' ').join('');
    //console.log( r.match(new RegExp('\\d{1,4}', 'g')));
   let value = cardNumber.split('')
      .join('') //.match(new RegExp(".{1,4}", "g")).join(" ");
      //remove everithing except digits
      .replace(/[^0-9]+/g, '')
      // limit input to 16 digits
      .replace(/(.{16}).*$/, '$1')
      // insert " " between groups of digits
      .replace(/^(.?.?.?.?)(.?.?.?.?)(.?.?.?.?)(.?.?.?.?)$/, '$1 $2 $3 $4')
      // remove exescive " " at th.e end
      .trim();
return value;
    //.replace(/(\d{2})(\d{2})(\d{4})/, "$1-$2-$3")
    // let maskedNumbers = cardNumber.slice(0, visibleDigits);
    // let visibleNumbers = cardNumber.slice(visibleDigits);
    // console.log('pipe');
    // return maskedNumbers.replace(/./g, '*') + visibleNumbers;
  }
}
