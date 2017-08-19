import { Component, Input } from '@angular/core'
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">    
        <h2>{{ hero.name }}</h2>
        <div><p>{{ hero?.opis.length > 255 ? (hero?.opis | slice:0:255) + '...' : (hero?.opis) }}</p></div>     
        <br/>
        <div class="prawy"><button md-button routerLink="/hero/{{hero.id}}">Czytaj więcej</button></div>
    </div>
    `,
    styles: [`
    .thumbnail { min-height: 290px; }
    .prawy { position: absolute; bottom: 30px; right: 30px; }
    @media screen and (max-width: 1200px) and (min-width: 920px) { 
        .thumbnail { min-height: 310px; }
    }
    `]
})

export class EventThumbnailCoponent{
    //wejście event: cokolwiek, bo pobiera z rodzica event-list
    //który ma jakąś wartość
    @Input() hero:any
}