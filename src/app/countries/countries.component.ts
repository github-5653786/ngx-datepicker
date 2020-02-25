import { Component, OnInit } from '@angular/core';
import { AutocompleteServiceService } from '../autocomplete-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private ser: AutocompleteServiceService, private r: Router) { }
  dropdownList = [];
  ngOnInit() {
  
    //   let req = new XMLHttpRequest();
    //   req.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //       var a = req.responseText;
    //       var b = JSON.parse(a);
    //       var c = [];
    //       console.log(b.options.length);
    //       for (let i = 0; i <= b.options.length - 1; i++) {
    //         c.push(`<table><td><ul><li>${b.options[i].label}</li></ul></td></table>`);
    //       }
    //       document.getElementById("demo").innerHTML = c.join('');
    //     }
    //   }
    //   req.open('GET', 'https://direct-prod-directportal.godigit.com/DirectPortal/international/travel/countries', true);
    //   req.send();
  }


  // fun() {
  // this.ser.country().subscribe(data => {
  //   let obj = data.json();
  //   let arr = [];
  //   for (let i = 0; i <= obj.options.length - 1; i++) {
  //      arr.push(obj.options[i].label);
  //   }
  // to print on html page
  // let iter = arr.values();
  // for (let ele of iter) {
  //   document.writeln(ele + "&nbsp");
  // }
  //   })
  // }

  country: string[] = [];

  fun() {
    this.ser.country().subscribe(data => {
      let d = data.json();
      //to refresh the array
      this.country = [];
      for (let i = 0; i <= d.options.length - 1; i++) {
        this.country.push(d.options[i].label);
      }
    })
  }
}
