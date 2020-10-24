import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None
})
export class PostComponent implements OnInit ,
  OnChanges,
  DoCheck,
  AfterContentInit,OnDestroy
{

  @Input() post: Post ;
@ContentChild('info', {static : true}) infoRef : ElementRef ;
@Output() onRemove = new EventEmitter<number>() ;
  constructor() {
    console.log('constructor') ;
  }

  ngOnInit(): void {
    console.log('ngOnInit') ;
  //  console.log(this.infoRef.nativeElement) ;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes) ;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck') ;
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  removePost() {
this.onRemove.emit(this.post.id) ;
  }

  ngOnDestroy(): void {
    console.log('onDestroy')
  }
}
