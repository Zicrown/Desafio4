import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { DescripcionComponent } from './descripcion.component';

const descRoutes: Routes = [
  {
    path: '', component: DescripcionComponent,
  }
]

@NgModule({
  declarations: [
    DescripcionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(descRoutes)
  ],
  exports:[RouterModule]
})
export class DescripcionModule { }
