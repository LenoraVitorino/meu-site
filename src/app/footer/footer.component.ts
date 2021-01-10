import { Component } from '@angular/core';
import { Link } from '../link/link';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
    links: Link[] = [
        {
            text: 'Behance',
            href: 'https://www.behance.net/lenoravitorino/appreciated',
            target: '_blank',
            logo: {
                src: './assets/images/behance.svg',
                alt: 'Logo da Behance'
            }
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/vitorino_lenora',
            target: '_blank',
            logo: {
                src: './assets/images/instagram.svg',
                alt: 'Logo do Instagram'
            }
        },
        {
            text: 'Facebook',
            href: 'https://www.facebook.com/lenora.vitorino',
            target: '_blank',
            logo: {
                src: './assets/images/facebook.svg',
                alt: 'Logo do Facebook'
            }
        }
    ];
}
