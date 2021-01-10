import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import {BrandModule} from '../brand/brand.module';
import {ButtonModule} from '../button/button.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HomeComponent, IntroductionComponent],
    imports: [
        CommonModule,
        BrandModule,
        ButtonModule,
        RouterModule
    ]
})
export class HomeModule { }
