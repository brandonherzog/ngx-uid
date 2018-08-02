import { Component, OnInit } from '@angular/core';

import { NgxUidService } from 'ngx-uid';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  movies = [
    'A New Hope',
    'The Empire Strikes Back',
    'Return of the Jedi',
  ];

  bestLabelId: string;
  worstLabelId: string;

  constructor(
    private uidService: NgxUidService,
  ) { }

  ngOnInit(): void {
    this.bestLabelId = this.uidService.next();
    this.worstLabelId = this.uidService.next();
  }
}
