import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import  { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { AboutMeComponent } from './about-me.component';

const routes: Routes = [
  {path: '', component: AboutMeComponent}
]

@NgModule({
  declarations: [
    AboutMeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatSlideToggleModule],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}