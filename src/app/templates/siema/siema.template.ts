import { Component } from '@angular/core';
import { TemplateHostComponent } from '../../TemplateStore/template-host.component';

@Component({
  template: '<ng-template #tmpl let-name="name">Siema {{name}}!</ng-template>',
})
export class SiemaTemplate extends TemplateHostComponent {
  context = { name: 'string' };
}
