import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { We7RouterModule } from 'meepo-we7-router';
import { AppComponent } from './app.component';
import { routes, components } from './routes';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    We7RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  entryComponents: [
    ...components
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
