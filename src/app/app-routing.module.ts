import { TemplateFormComponent } from './template-form/template-form.component';
import { MapComponent } from './map/map.component';
import { HomeBikeComponent } from './home-bike/home-bike.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  { path: '', redirectTo: "country", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "bike", component: HomeBikeComponent },
  { path: "country", component: CountriesComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "map", component: MapComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: "**", redirectTo: "country", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
