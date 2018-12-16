import { Component, OnInit } from '@angular/core';

import { testLessons } from '../sharred/model/test-lessons';
import { Lesson } from '../sharred/model/lesson';
import { initializeLessonsList } from './app-data';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   initializeLessonsList(testLessons.slice(0))

      setTimeout(() => {
        const newLesson = {
          id: Math.random(),
          description: 'New lesson ariving from the backend'
        }
      }, 10000);
  }

  addLesson(lessonText: string) {
    //
  }

}
