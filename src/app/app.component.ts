import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router'; // if we hide this becuase we don't have routing in this branch

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    FormsModule,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  componentsList : any[] = [
    {name: 'simple' , title: 'Simple Todo' , link: 'simple' },
    {name: 'built-in', title: 'Built in Control' , link: 'built-in'},
    {name: 'forms', title: 'Forms Services' , link: 'forms-services'},
  ]

}
