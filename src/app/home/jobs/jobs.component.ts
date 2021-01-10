import { Component } from '@angular/core';

import {Jobs} from './jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent{
    list: Jobs[] = [
        { text: 'Freedom Lingerie' },
        { text: 'Bell Beach Wear' },
        { text: 'La Linda Boutique' },
        { text: 'Ketlin Andrieli Makeup' },
        { text: 'Lenóra Vitorino Design' }
    ]
}
