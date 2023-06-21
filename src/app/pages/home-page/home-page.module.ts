import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatButtonModule } from '@angular/material/button'; 
import { HomePageComponent } from './home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {path: '', component: HomePageComponent}
]

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatFormFieldModule, MatButtonModule, ReactiveFormsModule, MatInputModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}