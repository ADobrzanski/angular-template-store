import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  template: '',
})
export abstract class TemplateHostComponent implements AfterViewInit {
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ref: Promise<TemplateRef<any>>;

  context;

  private _setRef;

  constructor() {
    this.ref = new Promise((res) => (this._setRef = res));
  }

  ngAfterViewInit() {
    this._setRef(this.tmpl);
  }
}
