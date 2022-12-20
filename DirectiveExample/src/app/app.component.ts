import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveExample';

  videos= [
    {title: 'My Video 1', share: 415, likes: 257, dislikes: 12, tumbline: 'assets/images/img-1.jpg'},
    {title: 'My Video 2', share: 215, likes: 325, dislikes: 12, tumbline: 'assets/images/img-2.jpg'},
    {title: 'My Video 3', share: 513, likes: 105, dislikes: 12, tumbline: 'assets/images/img-3.jpg'}
  ]
}
