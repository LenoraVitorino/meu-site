import { Component, Input } from '@angular/core';

import { AppService } from '../app.service';

@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.scss']
})
export class BrandComponent{
    @Input() large: boolean;

    constructor(public appService: AppService){}
}
