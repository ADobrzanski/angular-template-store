import { Component } from '@angular/core';
import { TemplateHostComponent } from '../../TemplateStore/template-host.component';

@Component({
  template: '<ng-template #tmpl let-name="name">Hello {{name}}!</ng-template>',
})
export class HelloTemplate extends TemplateHostComponent {
  context = { name: 'string' };
}
