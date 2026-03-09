import { Component, Input, Output, EventEmitter, output, input } from '@angular/core';

import { type User1 } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
@Input({ required: true }) user!: User1;
@Input({required: true}) selected!: boolean;
 @Output() select = new EventEmitter();

 get imagePath() {
  return `users/${this.user.avatar}`;
 }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
