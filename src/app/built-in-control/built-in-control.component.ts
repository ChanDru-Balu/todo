import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  

  todoList: any[] = [];
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
    if(todo.status == 'pending'){
      todo.status = 'completed';
    } else {
      todo.status = 'pending';
    }
  }


}
