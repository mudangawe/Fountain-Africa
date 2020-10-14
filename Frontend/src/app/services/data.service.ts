import { Injectable } from '@angular/core';
import {Observable, Subject } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class DataService {
  grade = ["Grade 8"]
  subject = [{id:0, added:false, name:'Maths', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"}]},
            {id:1,  added:false, name:'Science', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"}]},
            {id:2,  added:false, name:'LO', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"}]},
            {id:3,  added:false, name:'English', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"}]},
            {id:4,  added:false, name:'Tshivenda', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"}]},
            {id:5,  added:false, name:'Life Sciences', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"},{name:"Chapter 3"},{name:"Chapter 4"}]}];
  selectedSubject: any[];
  private monitorSubject = new Subject<any>();
  
  constructor() { }

  getAllSubject()
  {
    return this.subject;
  }
  getAllGrade()
  {
    return this.grade;
  }
  setSelectedSubject(subjects)
  {
    this.selectedSubject = subjects;
    this.monitorSubject.next({selectedSubject: this.selectedSubject})
  }
  getSelectedSubject():Observable<any>{
    return this.monitorSubject.asObservable();
  }

}
