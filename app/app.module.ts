import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailCoponent } from './events/event-thumbnail.component';
import { SharedService } from './events/shared/shared.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HaeroDetailComponent } from './events/haero-detail/haero-detail.component'
import { appRoutes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailCoponent,
    NavbarComponent,
    HaeroDetailComponent
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
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
