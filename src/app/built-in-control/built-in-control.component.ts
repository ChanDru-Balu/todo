import { CommonModule, NgIf } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number ,
  task : string ,
  date: Date,
  status : string ,
  isCompleted : Boolean
}

enum status {
  PEDNING = 'pending',
  COMPLETED = 'completed'
}

@Component({
  selector: 'app-built-in-control',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './built-in-control.component.html',
  styleUrl: './built-in-control.component.css'
})
export class BuiltInControlComponent {

  

  todoList  = signal<Todo[]>([]);
  currentTodo = signal<string>('');
  currentTodoId =  signal<number>(0);
  updateTodoEnable = signal<boolean>(false);

  addTodo(): void {
    console.log("Add todo called!")
    let todoObj = {
      id: new Date().getTime(),
      task: this.currentTodo(),
      date: new Date(),
      status: status.PEDNING,
      isCompleted: true
    }
    this.todoList.update((todos) => [...todos,todoObj])
    this.currentTodo.set('')
    console.log(this.todoList())
  }

  setCurrentTodo(event: Event) {
    let currentTodo =  event.target as HTMLInputElement;
    this.currentTodo.set(currentTodo.value)
  }

  updateTodo() {
    this.todoList.update((todos)=>
      todos.map((todo)=>
        todo.id === this.currentTodoId() ? {...todo,task:this.currentTodo()}: todo
      )
    )

    this.updateTodoEnable.set(false) ;
    this.currentTodo.set('');
    this.currentTodoId.set(0);
  }

  clickTodo(todo:any): void{
    this.currentTodo.set(todo.task) ;
    this.currentTodoId.set(todo.id) ;
    this.updateTodoEnable.set(true);
  }

  checkTodo(todo:any): void {
    this.todoList.update((todos)=>
      todos.map((t)=>
        todo.id === t.id ? {...t , status: t.status === status.PEDNING ? status.COMPLETED : status.PEDNING } : t
      )
    )
  }


}
