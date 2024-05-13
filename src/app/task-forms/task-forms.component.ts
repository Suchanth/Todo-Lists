import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-forms.component.html',
  styleUrl: './task-forms.component.css'
})
export class TaskFormsComponent {
@Input() taskList:any;
newTasks:string[]=[];
  addTodo(){
    this.taskList.unshift(this.newTasks)
    localStorage.setItem('my_tasks',JSON.stringify(this.taskList))
    this.newTasks=[''];
  }
}
