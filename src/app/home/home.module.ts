import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import {BrandModule} from '../brand/brand.module';
import {ButtonModule} from '../button/button.module';
import {RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {ContentModule} from '../content/content.module';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [HomeComponent, IntroductionComponent, AboutComponent, ServicesComponent],
    imports: [
        CommonModule,
        BrandModule,
        ButtonModule,
        RouterModule,
        ContentModule
    ]
})
export class HomeModule { }
