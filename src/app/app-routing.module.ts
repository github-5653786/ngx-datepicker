import { TemplateFormComponent } from './template-form/template-form.component';
import { MapComponent } from './map/map.component';
import { HomeBikeComponent } from './home-bike/home-bike.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: "country", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "bike", component: HomeBikeComponent },
  { path: "country", loadChildren: "../app/countries/countries.module#CountriesModule" },
  { path: "reactive-form", loadChildren: "../app/reactive-form/reactive.module#ReactiveModule" },
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
