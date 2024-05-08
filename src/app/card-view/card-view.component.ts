import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
})
export class CardViewComponent {
  @Input() person: any;
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
  onEdit(): void {
    this.edit.emit(this.person);
  }
}
