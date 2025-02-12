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


  addTodo(): void {
    console.log('Current Todo:', this.currentTodo);
    let todoObj = {
      id: new Date().getTime(),
      task: this.currentTodo,
      date: new Date(),
      status: "pending"
    }
    this.todoList.push(todoObj)
  }

  updateTodo() {
    console.log("currenttodoId:",this.currentTodoId);
    this.todoList.forEach((todo:any)=>{
      if(todo.id == this.currentTodoId){
        todo.task = this.currentTodo;
      }
    })
  }

  clickTodo(todo:any): void{
    console.log({todo});
    this.currentTodo = todo.task ;
    this.currentTodoId = todo.id ;
    this.updateTodoEnable = true;
  }

}
