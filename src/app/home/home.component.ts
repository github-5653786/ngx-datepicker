import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AutocompleteServiceService } from '../autocomplete-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  states: string[] = [];

  minDate1: Date;
  maxDate1: Date;
  minDate2: Date;
  maxDate2: Date;

  constructor(private http: Http, private userService: AutocompleteServiceService) {
    this.minDate1 = new Date();
    this.maxDate1 = new Date();

    // To display only 2019 whole year
    this.maxDate1 = new Date(this.maxDate1.getFullYear(), 11, 31);

    // this.minDate1.setDate(this.minDate1.getDate());
    // this.maxDate1.setDate(this.maxDate1.getDate() + 98);

    this.minDate2 = new Date();
    this.maxDate2 = new Date();

    // To display only 2019 whole year
    this.maxDate2 = new Date(this.maxDate2.getFullYear(), 11, 31);

    // this.minDate2.setDate(this.minDate2.getDate());
    // this.maxDate2.setDate(this.maxDate2.getDate() + 98);
  }

  ngOnInit() {
    this.userService.callget().subscribe(data => {
      let response = data.json();
      console.log(response.options.length);
      for (let i = 0; i <= response.options.length - 1; i++) {
        this.states.push(response.options[i].label);
      }
    });
  }

  departureDateMethod(e: any) {
    let dummyDate = new Date(e);
    let oneDayExtra = dummyDate.getDate() + 1;
    this.minDate2 = new Date(dummyDate.setDate(oneDayExtra));
  }

  onSubmit() {
    alert("success........!")
  }

  // Onclick1() {
  //   this.userService.callget().subscribe(data => {
  //     let response = data.json();
  //     this.states=[];
  //     for (let i = 0; i <= response.options.length - 1; i++) {
  //       this.states.push(response.options[i].label);
  //     }
  //   });
  // }

  // fun() {
  //   let req = new XMLHttpRequest();
  //   req.onreadystatechange = function () {
  //     if (this.readyState == 4 && this.status == 200) {
  //       var a = req.responseText;
  //       var b = JSON.parse(a);
  //       var c = [];
  //       console.log(b.options.length);
  //       for (let i = 0; i <= b.options.length - 1; i++) {
  //         c.push(`<table><td>${b.options[i].label}</td></table> <br>`);
  //       }
  //       document.getElementById("data").innerHTML = c.join('');
  //     }
  //   }
  //   req.open('GET', 'https://direct-prod-directportal.godigit.com/DirectPortal/international/travel/countries', true);
  //   req.send();
  // }
}
