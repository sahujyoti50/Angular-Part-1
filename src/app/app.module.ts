import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //bootstrap
// import { NoopAnimationsModule } from '@angular/platform-browser/animations'; //mat
// import {MatSliderModule} from '@angular/material/slider'; //mat
import {MatButtonModule} from '@angular/material/button';
import { ChildComponent } from './child/child.component'; //mat
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    // NoopAnimationsModule,
    // MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
