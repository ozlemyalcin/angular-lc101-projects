import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday Chores",tasks: ['Empty dishwasher', 'Start LaunchCode prep work', 'Buy groceries','Clean Bathroom']},
      {title: "Today's Chores",tasks:['Load dishwasher Again','Finish LauncCode prep work','Buy groceries you forgot']},
      {title: "Tomorrow's Chores", tasks:['Empty dishwasher Again','Play with LaunchCode practice code','GroceriesAgain']}
   ]
   constructor() { }

   ngOnInit() {
   }

}
