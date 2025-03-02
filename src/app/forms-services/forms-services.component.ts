import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number,
  task:string ,
  date: Date ,
  status: string,
  isCompleted: boolean
}

enum Status {
  PENDING = "pending",
  COMPLETED = "completed"
}

@Component({
  selector: 'app-forms-services',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './forms-services.component.html',
  styleUrl: './forms-services.component.css'
})
export class FormsServicesComponent {
  todoList: Todo[] = [];
  currentTodo: string = '';
  currentTodoId: number = 0;
  updateTodoEnable : boolean = false;

  addTodo(): void {
    let todoObj = {
      id: new Date().getTime(),
      task: this.currentTodo,
      date: new Date(),
      status: "pending",
      isCompleted: true
    }
    this.todoList.push(todoObj)
    this.currentTodo = '';
  }

  updateTodo() {
    this.todoList.forEach((todo:any)=>{
      if(todo.id == this.currentTodoId){
        todo.task = this.currentTodo;
        this.updateTodoEnable = false ;
        this.currentTodo = '';
        this.currentTodoId = 0;
      }
    })
  }

  clickTodo(todo:any): void{
    this.currentTodo = todo.task ;
    this.currentTodoId = todo.id ;
    this.updateTodoEnable = true;
  }

  checkTodo(todo:any): void {
    if(todo.status == Status.PENDING){
      todo.status = Status.COMPLETED;
    } else {
      todo.status = Status.PENDING;
    }
  }


}

