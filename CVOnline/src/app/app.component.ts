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
          project: 'Star Rating',
          tech :'KnockoutJS'
        },
        {
          title: 'Mar 2014 - Jan 2015   Axial Group',
          project: 'Internal and Public site',
          tech :'JQuery HTML'
        },
    ]
    
    constructor() {
        
    }
}
