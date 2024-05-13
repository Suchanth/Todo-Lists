import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipesPipe } from '../filter-pipes.pipe';
@Component({
  selector: 'app-task-lists',
  standalone: true,
  imports: [NgFor, FormsModule, FilterPipesPipe, NgIf],
  templateUrl: './task-lists.component.html',
  styleUrl: './task-lists.component.css',
})
export class TaskListsComponent {
  @Input() tasks: any;
  searchText: string = '';
  removeTodo(index: number) {
    this.tasks.splice(index, 1);
    localStorage.setItem('my_tasks', JSON.stringify(this.tasks));
  }
}
