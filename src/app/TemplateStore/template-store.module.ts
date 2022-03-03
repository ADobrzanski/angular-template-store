import {
  APP_BOOTSTRAP_LISTENER,
  ComponentRef,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { TemplateStoreService } from '../TemplateStore/template-store.service';
import { once } from '../utils/once';

@NgModule()
export class TemplateStoreModule {
  static forRoot(): ModuleWithProviders<TemplateStoreModule> {
    return {
      ngModule: TemplateStoreModule,
      providers: [
        TemplateStoreService,
        {
          provide: APP_BOOTSTRAP_LISTENER,
          multi: true,
          deps: [TemplateStoreService],
          useFactory: (store: TemplateStoreService) =>
            once((ref: ComponentRef<any>) => store.registerRootComponent(ref)),
        },
      ],
    };
  }
}
