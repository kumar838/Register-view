import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent} from  './register/register.component';
import { ViewComponent } from './view/view.component';

import { DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
