import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxUidDirective } from './ngx-uid.directive';
import { NgxUidService, NgxUidDefaultService } from './ngx-uid.service';

// export const NgxUidOptionsProvider = new InjectionToken<NgxUidOptionsProvider>("NgUidOptionsService");

export function provideOptions(options?: NgxUidService): NgxUidService {
  return options || new NgxUidDefaultService();
}

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
          // useFactory: provideOptions,
          useFactory: () => (options && options.idFactory) || new NgxUidDefaultService(),
          // useValue: options || new NgxUidDefaultService(),
        },
      ],
    };
  }
}
