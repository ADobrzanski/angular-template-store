import {
  ComponentRef,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { TemplateHostComponent } from '../TemplateStore/template-host.component';

export class TemplateStoreService {
  private _rootVCR: Promise<ViewContainerRef>;
  private _templates: Map<string, TemplateRef<any>> = new Map([]);

  private _setRootVCR;

  constructor() {
    this._rootVCR = new Promise((res) => (this._setRootVCR = res));
  }

  registerRootComponent(component: ComponentRef<any>): void {
    this._setRootVCR(component.injector.get(ViewContainerRef));
  }

  get<C extends TemplateHostComponent>(
    component: Type<C>
  ): Promise<TemplateRef<any>> {
    return this._rootVCR.then((rootVCR) => {
      console.log('gotRootVCR');
      const compType = typeof component;

      if (this._templates.has(compType))
        return Promise.resolve(this._templates.get(compType));

      const vcr = rootVCR.injector.get(ViewContainerRef);
      const tcr = vcr.createComponent(component);

      return tcr.instance.ref.then((_) => {
        this._templates.set(compType, _);
        return _;
      });
    });
  }
}
