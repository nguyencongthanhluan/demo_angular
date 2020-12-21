import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleModule } from './example/example.module';
import { DemobindingComponent } from './demobinding/demobinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DemobindingComponent],
  imports: [BrowserModule, ExampleModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
