import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple',
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css'
})
export class SimpleComponent {

  currentTodo: string = '';
  todoList: any[] = [];
  currentTodoId: number = 0;
  updateTodoEnable: boolean = false ;

/**
 *Add the todo from the input
 *
 * @memberof AppComponent
 */
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
