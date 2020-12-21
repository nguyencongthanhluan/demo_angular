import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { SliderComponent } from './index/slider/slider.component';
import { IndexcontentComponent } from './index/indexcontent/indexcontent.component';
import { ItemComponent } from './index/indexcontent/item/item.component';

@NgModule({
  declarations: [
    ExampleComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    SliderComponent,
    IndexcontentComponent,
    ItemComponent,
  ],
  imports: [CommonModule],
  exports: [ExampleComponent],
})
export class ExampleModule {}
