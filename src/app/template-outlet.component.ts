import { Component, TemplateRef } from '@angular/core';
import { HelloTemplate } from './templates/hello/hello.template';
import { TemplateHostContext } from './TemplateStore/template-host-context.model';
import { TemplateStoreService } from './TemplateStore/template-store.service';

@Component({
  selector: 'template-outlet-comp',
  template:
    '@template-outlet.comp: <ng-container *ngTemplateOutlet="helloRef;context:ctx"></ng-container>',
})
export class BlaComponent {
  helloRef: TemplateRef<any>;
  ctx: TemplateHostContext<HelloTemplate> = { name: 'Angular' };

  constructor(tmplSvc: TemplateStoreService) {
    tmplSvc.get(HelloTemplate).then((_) => {
      this.helloRef = _;
    });
  }
}
