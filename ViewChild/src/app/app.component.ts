import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';

  @ViewChild('dobInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;
  @ViewChild(DemoComponent, { static: true })
  demoComp!: DemoComponent;

  calculateAge(){
      let birthDate = new Date(this.dateOfBirth.nativeElement.value);
      let currentDate = new Date();
      let diffInMilliseconds = Math.abs(currentDate.getTime() - birthDate.getTime()); 
      let diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      this.age.nativeElement.value = Math.floor(diffInYears);
  }

}
