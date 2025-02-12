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

  currentTodo : string = '';
  todoList : any[] = [];


  addTodo(): void {
    console.log('Current Todo:',this.currentTodo);
    this.todoList.push(this.currentTodo)
  }

}
