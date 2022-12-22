import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { AngularComponent } from './angular/angular.component';
import { EnrollService } from './Services/enroll.service';

@NgModule({
  declarations: [
    AppComponent,
    JavaScriptComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule
  ],

  //Hierarchical Injection
  providers: [EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
