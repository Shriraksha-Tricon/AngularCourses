import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.css']
})
export class JavaScriptComponent {
  title= 'JavaScript';

  onEnroll(){
    const enrollService = new EnrollService;
    enrollService.OnEnrollClicked(this.title);
  }
}
