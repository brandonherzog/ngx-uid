import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxUidDirective } from './ngx-uid.directive';
import { NgxUidNoBindDirective } from './ngx-uid-no-bind.directive';
import { NgxUidService, NgxUidDefaultService } from './ngx-uid.service';

export interface NgxUidOptions {
  idFactory?: NgxUidService;
}

export const NGXUID_OPTIONS: InjectionToken<string> = new InjectionToken('NgxUid options');

export function provideUidService(options?: NgxUidOptions) {
  return (options && options.idFactory) || new NgxUidDefaultService();
}

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgxUidDirective,
    NgxUidNoBindDirective,
  ],
  exports: [
    NgxUidDirective,
    NgxUidNoBindDirective,
  ],
})
export class NgxUidModule {
  static forRoot(options?: NgxUidOptions): ModuleWithProviders {
    return {
      ngModule: NgxUidModule,
      providers: [
        {
          provide: NGXUID_OPTIONS,
          useValue: options,
        },
        {
          provide: NgxUidService,
          useFactory: provideUidService,
          deps: [NGXUID_OPTIONS],
        },
      ],
    };
  }
}
