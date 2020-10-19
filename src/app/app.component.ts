import { Component } from '@angular/core';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartest';
  number = 42;
  arr = [1,2,3,4]
  obj = {
    a: 1, b: {c: 2}
  }

  inputValue = ''


  // img = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'

  constructor() {
    // setTimeout( () => {
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'
    // },  5000);
  }

  onInput(event?){
    console.log('event', event)
  }

}
