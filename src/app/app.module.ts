import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//For Multi Selection of values with textbox


import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AutocompleteServiceService } from './autocomplete-service.service';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeBikeComponent } from './home-bike/home-bike.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { TemplateFormComponent } from './template-form/template-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    HomeComponent,
    CountriesComponent,
    HomeBikeComponent,
    MapComponent,
    TemplateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "google api key"
    })
  ],
  providers: [AutocompleteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
