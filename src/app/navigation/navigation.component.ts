import { Component } from '@angular/core';

import { Link } from '../link/link';
import { AppService } from '../app.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{
    constructor(public appService: AppService){}

    links: Link[] = [
        { text: 'Home', href: '', target: '_self' },
        { text: 'Sobre', href: '', target: '_self' },
        { text: 'Serviços', href: '', target: '_self' },
        { text: 'Jobs', href: '', target: '_self' },
    ];
}
