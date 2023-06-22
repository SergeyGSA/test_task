import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MyCvComponent } from './my-cv.component';

const routes: Routes = [
  {path: '', component: MyCvComponent}
]

@NgModule({
  declarations: [
    MyCvComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatExpansionModule, MatButtonModule],
  exports: [MyCvComponent],
})
export class MyCvModule {}