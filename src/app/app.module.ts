import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateStoreModule } from './TemplateStore/template-store.module';
import { BlaComponent } from './template-outlet.component';
import { HelloTemplate } from './templates/hello/hello.template';

@NgModule({
  imports: [BrowserModule, FormsModule, TemplateStoreModule.forRoot()],
  declarations: [AppComponent, BlaComponent, HelloTemplate],
  bootstrap: [AppComponent],
})
export class AppModule {}
