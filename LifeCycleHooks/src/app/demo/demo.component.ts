import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() value: string = 'Procademy'

  constructor() {
    console.log('Constructor Called!');
    //console.log(this.value)
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges Called!');
    console.log(change);
  }

  ngOnInit() {
    console.log('ngOnInit Called!');
    //console.log(this.value)
  }

  ngDoCheck() {
    console.log("ngDoCheck Called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Called!");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Called!");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy Called!");
  }

}
