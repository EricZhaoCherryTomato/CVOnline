import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eric Ye Zhao Online CV';

   private itemsList:Object[] = [
        {
          title: 'Jan 2015 - Current   Domino’s Pizza Enterprise',
          projects: [ { name : 'Star Rating', tech: 'KnockoutJS'},
                      { name : 'Online Order Responsive Redesign', tech: 'SASS HTML KnockoutJS'}]
        },
        {
          title: 'Mar 2014 - Jan 2015   Axial Group',
          projects: [ { name : 'Internal and Public site', tech: 'JQuery HTML'},
                      { name : 'Student Enrollment System', tech: 'JQuery CSS HTML'}]
        }
    ]
    
    constructor() {
        
    }
}
