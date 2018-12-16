import { Component } from '@angular/core';
import { Lesson } from '../sharred/model/lesson';
import * as _ from 'lodash';
import { lessonsList$, Observer } from '../event-bus-experiments/app-data';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {

  lessons: Lesson[] = [];

  constructor() {
    console.log('lesson list component is registered as observer');

    lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    console.log('Lessons list cmoponent')
    this.lessons = data.slice(0);
  }

}
