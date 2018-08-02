import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxUidDirective } from './ngx-uid.directive';
import { NgxUidService, NgxUidDefaultService } from './ngx-uid.service';

export interface NgxUidOptions {
  idFactory?: NgxUidService;
}

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgxUidDirective,
  ],
  exports: [
    NgxUidDirective,
  ],
})
export class NgxUidModule {
  static forRoot(options?: NgxUidOptions): ModuleWithProviders {
    return {
      ngModule: NgxUidModule,
      providers: [
        {
          provide: NgxUidService,
          useFactory: () => (options && options.idFactory) || new NgxUidDefaultService(),
        },
      ],
    };
  }
}
