import {Component, OnInit} from '@angular/core';
import {timeout} from 'rxjs/operators';

export  interface Post {
  title : string
  text : string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
 posts: Post[] = [
   {
     id: 1,
     title: 'wanna learn angular',
     text: 'some test'
   }
   // ,
   // {
   //   id: 2,
   //   title: '1211r',
   //   text: 'aaaaaaaaaaaaaaaa'
   // }
 ]


  updatePosts(post : Post) {
    console.log('post ', post) ;
    this.posts.unshift(post) ;
  }

  removePost(id: number) {
    console.log(id) ;
    this.posts = this.posts.filter(p => p.id !== id);
  }

  ngOnInit(): void {
   setTimeout(() => {
     console.log('timeout') ;
     this.posts[0] = {
       title : 'changed',
       text : 'cg111',
       id: 4
     }
   } , 5000) ;
  }
}
