import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [
    MaterialDesignModule
  ]
})
export class CommonComponentsModule { }
