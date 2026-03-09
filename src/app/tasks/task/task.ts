import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task1 } from './task.model';
import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: Task1;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
