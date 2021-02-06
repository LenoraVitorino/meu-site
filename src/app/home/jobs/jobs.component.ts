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
        { src: './assets/images/la-linda-boutique.jpg', href: '', text: 'La Linda Boutique' },
        { src: './assets/images/lenora-vitorino.jpg', href: '', text: 'Lenóra Vitorino Design' }
    ];

    arts: Jobs[] = [
        { src: './assets/images/hookah.jpg', href: '', text: 'Narguilé' },
        { src: './assets/images/acai.jpg', href: '', text: 'Açaí' },
        { src: './assets/images/hamburger.jpg', href: '', text: 'Hambúrguer' },
        { src: './assets/images/pet-shop.jpg', href: '', text: 'Pet shop' },
        { src: './assets/images/beer.jpg', href: '', text: 'Cerveja' }
    ];
}
