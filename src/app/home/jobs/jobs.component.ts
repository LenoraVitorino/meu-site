import { Component } from '@angular/core';

import {Jobs} from './jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent{
    list: Jobs[] = [
        { src: './assets/images/freedom-lingerie.jpg', href: '', text: 'Freedom Lingerie' },
        { src: './assets/images/bell-beach-wear.jpg', href: '', text: 'Bell Beach Wear' },
        { src: './assets/images/ketlin-andriele-makeup.jpg', href: '', text: 'Ketlin Andriele Makeup' },
        { src: './assets/images/bell-beach-wear.jpg', href: '', text: 'La Linda Boutique' },
        { src: './assets/images/bell-beach-wear.jpg', href: '', text: 'Lenóra Vitorino Design' }
    ];
}
