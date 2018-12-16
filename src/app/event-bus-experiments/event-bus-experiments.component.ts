import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event-bus';
import { testLessons } from '../sharred/model/test-lessons';
import { Lesson } from '../sharred/model/lesson';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  lessons: Lesson[] = [];

  constructor() { }

  ngOnInit() {

    this.lessons = testLessons.slice(0);

    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, 
      this.lessons);

      setTimeout(() => {
        this.lessons.push({
          id: Math.random(),
          description: 'New lesson ariving from the backend'
        });

        globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons)
      }, 10000);
  }

  addLesson(lessonText: string) {
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}
