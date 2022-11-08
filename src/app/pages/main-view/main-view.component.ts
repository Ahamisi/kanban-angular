import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { column } from 'src/app/models/column.model';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board =  new Board('Ahamisi kanban Board', [
    new column('ideas', [
      "Some random ideas",
      "This is another random idea",
      "Build an awesome application"
    ]),
    new column('research', [
      "Research Recreate app",
      "This is another random idea",
      "Genome editing",
      "The molecular structure of DNA",
      "Electricity",

    ]),
    new column('todo', ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']),
    new column('done', ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']),


  ])

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
