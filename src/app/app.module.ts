import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestEventDirective } from './directive/test-event.directive';
import { FormatPipe } from './directive/format.pipe';
import { CardNoDirective } from './directive/card-no.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TestEventDirective,CardNoDirective, FormatPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
