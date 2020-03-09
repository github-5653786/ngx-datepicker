import { FormsModule } from '@angular/forms';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ]
})
export class CountriesModule {
  constructor() {
    console.log("countries module loaded on demand");
  }
}
