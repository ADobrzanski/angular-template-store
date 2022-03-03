import { Component } from '@angular/core';
import { TemplateHostComponent } from './TemplateStore/template-host.component';

@Component({
  template: `<ng-template #tmpl let-name="name"><h1>Hello {{name}}!</h1><ng-template>`,
})
export class HelloComponent extends TemplateHostComponent {
  context: {
    name: '',
  };
}
