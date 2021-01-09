import { Injectable } from '@angular/core';

import { Logo } from './logo/logo';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    get logo(): Logo{
        return {
            src: './assets/images/logo.png',
            alt: 'Logo da Lenóra Vitorino'
        };
    }
}
