import { Component } from '@angular/core';
import { NgxUidService } from 'ngx-uid';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  uid: string;
  constructor(uidService: NgxUidService) {
    this.uid = uidService.next();
  }
}
