import {Component, OnInit} from '@angular/core';
import {timeout} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
e:number = Math.E ;
str:string = 'hello world'
}
