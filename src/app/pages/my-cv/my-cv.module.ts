import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyCvComponent } from './my-cv.component';

const routes: Routes = [
  {path: '', component: MyCvComponent}
]

@NgModule({
  declarations: [
    MyCvComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [MyCvComponent],
})
export class MyCvModule {}