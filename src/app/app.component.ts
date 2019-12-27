import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Person } from './shared/models/person.model'; 

@Component({ 
    selector: 'app-root', 
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.css' ]
} )

export class AppComponent implements OnInit, OnDestroy {     
    title = 'Components'; 
    persons: Person[] = []; 

constructor() { 
} 

ngOnInit(): void { 
    this.persons.push(new Person('Zzz', 'Zzzov', 1)); 
    this.persons.push(new Person('Zzz', 'Zzzov', 2)); 
    this.persons.push(new Person('Zzz', 'Zzzov', 3)); 
    this.persons.push(new Person('Zzz', 'Zzzov', 4)); 
    this.persons.push(new Person('Zzz', 'Zzzov', 5)); 
} 

ngOnDestroy(): void { 
} 

onAddPerson(person: Person) { 
    if(person.firstname!="" && person.lastname!=""){ 
        if(this.persons.length==0){ 
            person.id=1; 
        } 
        else 
            person.id=this.persons[this.persons.length - 1].id + 1; 

    this.persons.push(person); 
    } 
} 

test(even) { 
    console.log(event); 
} 

onDeletePerson(delete_index: number) { 
    this.persons.splice(this.persons.indexOf(this.persons.find(element => element.id === delete_index)), 1); 
} 

onEditPerson(person: Person) { 
    Object.assign (this.persons.find(element => element.id === person.id), person); 
} 

}