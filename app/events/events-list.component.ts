import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    template: `
    <div>
        <h1>Game of Thrones!</h1>
        <hr />
        <div class="row">
            <div *ngFor="let hero of heroes" class="col-md-4 col-sm-6 col-xs-12">
                <event-thumbnail [hero]="hero"></event-thumbnail>
            </div>            
        </div>
    </div>
    `})

export class EventsListComponent implements OnInit {
  // deklaruje zmienną heroes, pobieram dane z tablicy
  heroes:any[]
  
  //konstruktor: przypisuje dane eventService
  constructor(private eventService: SharedService, private route:ActivatedRoute){ }
  
  // ngOnInit: musi być ponieważ wstrzyknąłem dane ze sharedService, które jest Injectable()
  ngOnInit(){
    this.heroes = this.route.snapshot.data['heroes'] 
  }
}
