import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ActionsComponent } from './actions/actions.component';
import { ToDoService } from './toDo.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
