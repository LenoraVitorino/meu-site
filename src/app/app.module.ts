import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LinkComponent } from './link/link.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import {BrandModule} from './brand/brand.module';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        LinkComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        BrandModule
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule{}
