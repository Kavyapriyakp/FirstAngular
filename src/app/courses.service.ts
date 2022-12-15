import { count } from "rxjs";

export class CoursesService{
    courselist=["course1","course2","course3"];
    total=0;
    getCourses(){
        return this.courselist;
    }

    getCount(){
        for (var i in this.courselist){ this.total+=1;}
        return this.total;

    }
}