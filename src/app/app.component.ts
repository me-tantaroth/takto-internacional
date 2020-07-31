import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  obj: Object = {
    name: 'Eduard',
    email: 'tantaroth@gmail.com'
  };

  constructor() {
  }
}
