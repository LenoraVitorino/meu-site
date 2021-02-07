import { Component } from '@angular/core';

import {Jobs} from './jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent{
    list: Jobs[] = [
        { src: './assets/images/freedom-lingerie.jpg', href: 'https://www.behance.net/lenoravitorino', text: 'Freedom Lingerie' },
        { src: './assets/images/bell-beach-wear.jpg', href: 'https://www.behance.net/lenoravitorino', text: 'Bell Beach Wear' },
        {
            src: './assets/images/ketlin-andriele-makeup.jpg',
            href: 'https://www.behance.net/lenoravitorino',
            text: 'Ketlin Andriele Makeup'
        },
        { src: './assets/images/la-linda-boutique.jpg', href: 'https://www.behance.net/lenoravitorino', text: 'La Linda Boutique' },
        {
            src: './assets/images/lenora-vitorino.jpg',
            href: 'https://www.behance.net/gallery/113030219/Identidade-Visual-Lenora-Vitorino',
            text: 'Lenóra Vitorino Design'
        }
    ];

    arts: Jobs[] = [
        { src: './assets/images/hookah.jpg', href: 'https://www.behance.net/lenoravitorino', text: 'Narguilé' },
        { src: './assets/images/acai.jpg', href: 'https://www.behance.net/lenoravitorino', text: 'Açaí' },
        { src: './assets/images/hamburger.jpg', href: 'https://www.behance.net/lenoravitorino', text: 'Hambúrguer' },
        { src: './assets/images/pet-shop.jpg', href: 'https://www.behance.net/lenoravitorino', text: 'Pet shop' },
        { src: './assets/images/beer.jpg', href: 'https://www.behance.net/lenoravitorino', text: 'Cerveja' }
    ];
}
