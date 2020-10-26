import {Component, OnInit} from '@angular/core';
import {timeout} from 'rxjs/operators';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts: Post [] = [
  {    title: 'beer', text: 'most tasty beer in the world' },
  {    title: 'bread', text: 'most tasty bread in the world' },
  {    title: 'JS', text: 'fucking js' }
]
  search = '';
searchField = 'title'
}
