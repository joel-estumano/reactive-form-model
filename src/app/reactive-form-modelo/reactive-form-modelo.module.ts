import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormModeloComponent } from './views/reactive-form-modelo.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ReactiveFormModeloComponent }
];

@NgModule({
  declarations: [
    ReactiveFormModeloComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModeloModule { }
