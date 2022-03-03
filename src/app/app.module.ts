import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemplateStoreModule } from './TemplateStore/template-store.module';
import { BlaComponent } from './bla.component';
import { SiemaTemplate } from './templates/siema/siema.template';

@NgModule({
  imports: [BrowserModule, FormsModule, TemplateStoreModule.forRoot()],
  declarations: [AppComponent, HelloComponent, BlaComponent, SiemaTemplate],
  bootstrap: [AppComponent],
})
export class AppModule {}
