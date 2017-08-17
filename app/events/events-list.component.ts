import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service'

@Component({
    template: `
    <div>
        <h1>Game of Thrones!</h1>
        <hr />
        <div class="row">
            <div *ngFor="let event of events" class="col-md-4 col-sm-6 col-xs-12">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>            
        </div>
    </div>
    `})

export class EventsListComponent implements OnInit {
  // deklaruje zmienną events, pobieram dane z tablicy
  events:any[]
  
  //konstruktor: przypisuje dane eventService
  constructor(private eventService: SharedService){ }
  
  // ngOnInit: musi być ponieważ wstrzyknąłem dane ze sharedService, które jest Injectable()
  ngOnInit(){
    this.events = this.eventService.getEvents() 
  }
}
