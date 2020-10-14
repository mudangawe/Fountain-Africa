import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  subject = [{name:'Maths', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"}]},
            {name:'Science', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"}]},
            {name:'LO', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"}]},
            {name:'English', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"}]},
            {name:'Tshivenda', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"}]},
            {name:'Life Sciences', chapter:[{name:"Chapter 1"},{name:"Chapter 2"},{name:"Chapter 3"},{name:"Chapter 4"},{name:"Chapter 3"},{name:"Chapter 4"}]}]
  constructor() { }
  getSubject()
  {
    console.log(this.subject)
    return this.subject;
  }
}
