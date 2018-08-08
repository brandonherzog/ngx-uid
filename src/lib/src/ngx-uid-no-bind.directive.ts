import { Directive } from '@angular/core';
import { NgxUidService } from './ngx-uid.service';

@Directive({
  selector: '[ngxUidNoBind]',
  exportAs: 'ngxUidNoBind',
})
export class NgxUidNoBindDirective {
  uid: string = this.uidService.next();

  public constructor(
    private uidService: NgxUidService,
  ) { }

  // override toString so that we may bind ids directly to directive instances
  toString(): string {
    return this.uid;
  }
}
