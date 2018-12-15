import { Component } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE } from '../event-bus-experiments/event-bus';
import { Lesson } from '../sharred/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {

  lessons: Lesson[] = [];

  constructor() { 
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
  }

  notify(data: Lesson[]) {
    console.log('Lessons list cmoponent')
    this.lessons = data;
  }

}
