import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  //providers: [EnrollService]
})
export class AngularComponent {
  title = 'Angular';

  //Dependency Injection
  constructor(private enrollService: EnrollService) { }

  onEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
}
