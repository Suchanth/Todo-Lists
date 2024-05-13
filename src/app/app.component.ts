import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TaskFormsComponent } from './task-forms/task-forms.component';
import { TaskListsComponent } from './task-lists/task-lists.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    TaskFormsComponent,
    TaskListsComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'My Task-List';
  taskList: string[] = [];
  constructor() {}

  ngOnInit(): void {
    const storedTasks = localStorage.getItem('my_tasks');
    if (storedTasks !== null) {
      this.taskList = JSON.parse(storedTasks);
    }
  }
}
