import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './forms-services.component.html',
  styleUrl: './forms-services.component.css'
})
export class FormsServicesComponent {
  
  private fb = inject(FormBuilder);
  todoForm : FormGroup = this.fb.group({
      id: [0],
      task:['',[Validators.required]],
      date:[new Date()],
      status:[Status.PENDING],
      isCompleted: [false]
  })

  todoList: Todo[] = [];
  currentTodo: string = '';
  currentTodoId: number = 0;
  updateTodoEnable : boolean = false;

  

  addTodo(): void {
    console.log("Form:",this.todoForm.value)
    let todoObj = {
      id: new Date().getTime(),
      task: this.todoForm.get('task')?.value,
      date: this.todoForm.get('date')?.value,
      status: this.todoForm.get('status')?.value,
      isCompleted: this.todoForm.get('isCompleted')?.value,
    }
    this.todoList.push(todoObj)
    this.todoForm.get('task')?.setValue('');
  }

  updateTodo() {
    this.todoList.forEach((todo:any)=>{
      if(todo.id == this.currentTodoId){
        todo.task = this.todoForm.get('task')?.value;
        this.updateTodoEnable = false ;
        this.todoForm.get('task')?.setValue('');
        this.currentTodoId = 0;
      }
    })
  }

  clickTodo(todo:Todo): void{
    this.currentTodoId = todo.id ;
    this.updateTodoEnable = true;
    this.todoList.map((t:Todo)=>{
      if(t.id === todo.id){
        this.todoForm.get('task')?.setValue(t.task)
      }
    })
  }

  checkTodo(todo:any): void {
    if(todo.status == Status.PENDING){
      todo.status = Status.COMPLETED;
    } else {
      todo.status = Status.PENDING;
    }
  }


}

