import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.css'],
  providers: [EnrollService]
})
export class JavaScriptComponent {
  title= 'JavaScript';

  //Dependency Injection
  constructor(private enrollService : EnrollService){ }

  onEnroll(){
    this.enrollService.OnEnrollClicked(this.title);
  }
}
