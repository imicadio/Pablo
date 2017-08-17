import { Component, Input } from '@angular/core'
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">    
        <h2>{{ hero.name }}</h2>
        <div><p>{{ hero?.opis | slice:0:255 }}...</p></div>     
        <br/>
        <div class="prawy"><button md-button routerLink="/hero/{{hero.id}}">Czytaj więcej</button></div>
        <br/>
    </div>
    `,
    styles: [`
    .thumbnail { min-height: 250px; }
    .prawy { float: right; width 100%; }
    `]
})

export class EventThumbnailCoponent{
    // wejście event: cokolwiek, bo pobiera z rodzica events
    //który ma jakąś wartość
    @Input() hero:any
}