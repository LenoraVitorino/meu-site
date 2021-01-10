import {AfterViewInit, Component} from '@angular/core';

import * as $ from 'jquery';
import ClickEvent = JQuery.ClickEvent;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
    ngAfterViewInit(): void{
        $(() => {
            $('a').on('click', (event: ClickEvent) => {
                const hash = event.currentTarget.hash || event.target.hash;

                if (hash !== '') {
                    event.preventDefault();

                    $('html, body').animate({
                        scrollTop: $(hash)?.offset?.()?.top
                    }, 1000);
                }
            });
        });
    }
}
