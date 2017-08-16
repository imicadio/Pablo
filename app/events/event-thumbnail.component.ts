import { Component, Input } from '@angular/core'
import { SlicePipe } from '@angular/common';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">    
        <h2>{{ event.name }}</h2>
        <div><p>{{ event?.opis | slice:0:255 }}...</p></div>     
        <br/>
        <div class="prawy"><button md-button>Czytaj więcej</button></div>
        <br/>
    </div>
    `,
    styles: [`
    .thumbnail { min-height: 250px; }
    .prawy { float: right; width 100%; }
    `]
})

export class EventThumbnailCoponent{
    @Input() event:any
}