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
            href: 'https://www.behance.net/lenoravitorino',
            target: '_blank',
            logo: {
                src: './assets/images/behance.svg',
                alt: 'Logo da Behance'
            }
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/len%C3%B3ra-vitorino-9283981aa',
            target: '_blank',
            logo: {
                src: './assets/images/linkedin.svg',
                alt: 'Logo do LinkedIn'
            }
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/lenoravitorino.design',
            target: '_blank',
            logo: {
                src: './assets/images/instagram.svg',
                alt: 'Logo do Instagram'
            }
        }
    ];
}
