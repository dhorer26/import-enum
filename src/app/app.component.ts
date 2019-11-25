import { Component, Input } from '@angular/core';
import { DisplaySize } from './enum/display-size.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  displaySize: DisplaySize = DisplaySize.MEDIUM;
}
