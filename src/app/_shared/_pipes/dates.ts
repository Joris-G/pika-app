import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) { }
  transform(date: Date): string {

    if (date == null) {
      return null;
    }

    const formatDate = this.datePipe.transform(date, 'dd/MM/yyyy à HH\'h\'mm');

    return formatDate;

  }

}
