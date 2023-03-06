import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Action } from "./action";

@Injectable()
export class ToDoService {
  actions$ = new BehaviorSubject<Action[]>([]);
  
  addNewAction(action: string): void {
    const newAction: Action = {
      name: action,
      isChecked: false,
      id: Math.random().toString(16),
    }

    const updateActions = [...this.actions$.getValue(), newAction];
    this.actions$.next(updateActions);
  }

  deleteAction(id: string) {
    const updateActions = this.actions$.getValue().filter((action) => action.id !== id);
    this.actions$.next(updateActions);

  }

  updateAction(id: string) {
    const updateActions = this.actions$.getValue().map((action) => {
      if (action.id === id) {
        action.isChecked = !action.isChecked;
      } return action;
    });
    this.actions$.next(updateActions);
  }
  
}