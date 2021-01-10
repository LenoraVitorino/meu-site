import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent{
    @Input() title: string|undefined;
    @Input() dark: boolean|undefined;
    @Input() id: string|undefined;
}
