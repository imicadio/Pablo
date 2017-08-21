import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {
  EventsListComponent,
  EventThumbnailCoponent,
  SharedService,
  CreateEventComponent,
  HeroRouteActivator,
  EventListResolver,
  HaeroDetailComponent
} from './events/index'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes'
import { ErrorComponent } from './error/error.component'


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailCoponent,
    NavbarComponent,
    HaeroDetailComponent,
    CreateEventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    SharedService, 
    HeroRouteActivator, 
    EventListResolver,
    { provide: 'canDeactivateCreateHero', useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('Na pewno chcesz anulować tworzenie postaci?')
  return false
}
