import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
            <h2>{{getTitle()}}</h2>
            <h3>{{ tot +" Authors"}}</h3>
            <ul>
                <li *ngFor="let course of courses">
                    {{course}}                
                </li>
            </ul>
            `
})

export class CoursesComponent{
    title="List of Courses";
    courses;
    tot;

    constructor (service: CoursesService){
        this.courses = service.getCourses();
        this.tot=service.getCount();
    }

    getTitle(){
        return this.title;
    }
}