import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-haero-detail',
  templateUrl: './haero-detail.component.html',
  styleUrls: ['./haero-detail.component.css']
})
export class HaeroDetailComponent implements OnInit {
  hero:any
  
  constructor(private eventService: SharedService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.hero = this.eventService.getHero(+this.route.snapshot.params['id'])
  }
}
