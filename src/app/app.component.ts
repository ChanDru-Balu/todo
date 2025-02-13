import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router'; // if we hide this becuase we don't have routing in this branch

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


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
