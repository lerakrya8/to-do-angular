import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '../action';
import { ToDoService } from '../toDo.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})

export class ActionsComponent {

  toDoActions$: Observable<Action[]>;
  
  constructor (private toDoService: ToDoService) {
    this.toDoActions$ = this.toDoService.actions$;
  }

  deleteAction(id: string) {
    this.toDoService.deleteAction(id);
  }

  updateAction(id: string) {
    this.toDoService.updateAction(id);
    console.log(this.toDoService.actions$);
  }
  
}
