import { Component, TemplateRef } from '@angular/core';
import { SiemaTemplate } from './templates/siema/siema.template';
import { TemplateHostContext } from './TemplateStore/template-host-context.model';
import { TemplateStoreService } from './TemplateStore/template-store.service';

@Component({
  selector: 'bla',
  template:
    '<ng-container *ngTemplateOutlet="helloRef;context:ctx"></ng-container>',
})
export class BlaComponent {
  helloRef: TemplateRef<any>;
  ctx: TemplateHostContext<SiemaTemplate> = { name: 'Kątowy' };

  constructor(tmplSvc: TemplateStoreService) {
    tmplSvc.get(SiemaTemplate).then((_) => {
      console.log('siema');
      this.helloRef = _;
    });
  }
}
