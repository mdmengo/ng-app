import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnChanges() {
    console.log('ngOnChanges called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngDestroy() {
    console.log('ngDestroy called!')
  }



}
