import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ValidatedInputComponent} from './components/validated-input.component';
import {HelperComponent} from './components/helper/helper.component';
import {LabelComponent} from './components/label/label.component';
import {InputComponent} from './components/input/input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ValidatedInputComponent, HelperComponent, LabelComponent, InputComponent],
  exports: [ValidatedInputComponent, HelperComponent, LabelComponent, InputComponent],
})
export class ValidatedInputModule {
}
