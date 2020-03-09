import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';

@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule {
  constructor() {
    console.log("reactive form loadded on demand");

  }
}
