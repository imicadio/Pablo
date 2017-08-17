import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { SharedService } from '../shared/shared.service'

@Injectable()
export class HeroRouteActivator implements CanActivate {
    constructor(private sharedService: SharedService, private router:Router) { }

    canActivate(route:ActivatedRouteSnapshot){
        const heroExists = !!this.sharedService.getHero(+route.params['id'])

        if (!heroExists)
            this.router.navigate(['/404'])
        return heroExists
    }
}