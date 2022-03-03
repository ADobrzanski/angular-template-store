import { TemplateHostComponent } from '../TemplateStore/template-host.component';

export type TemplateHostContext<T extends TemplateHostComponent> = T['context'];
