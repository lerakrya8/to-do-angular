import { Component } from '@angular/core';
import { ToDoService } from '../toDo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  constructor (private toDoService: ToDoService) { }

  addToList(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if(value) {
      this.toDoService.addNewAction(value);
      target.value = '';
    }
  }

  addToListByButton(value: string): void {
    if(value) {
      this.toDoService.addNewAction(value);
    }
  }

}
