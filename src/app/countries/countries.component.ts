import { Component, OnInit } from '@angular/core';
import { AutocompleteServiceService } from '../autocomplete-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  country: string[] = [];
  constructor(private ser: AutocompleteServiceService, private r: Router) { }

  ngOnInit() {
    this.ser.country().subscribe(data => {
      let d = data.json();
      //to refresh the array
      this.country = [];
      for (let i = 0; i <= d.options.length - 1; i++) {
        let a = d.options[i].label;
        if (a.includes("_N")) {
          // let b = a.replace("_N", "");
          let b = a.split("_N")[0];
          this.country.push(b);
        } else {
          this.country.push(a);
        }
      }
    });
  }
}
