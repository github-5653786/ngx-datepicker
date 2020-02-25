import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteServiceService {

  constructor(private http: Http) { }

  callget() {

    let _url1: string = "https://direct-prod-directportal.godigit.com/DirectPortal/international/travel/countries";
    return this.http.get(_url1);
  }

  callBike(a: string) {
    let _url2: string = "https://direct-prod-directportal.godigit.com/DirectPortal/bike/variant/match/make_model/" + a;
    return this.http.get(_url2);
  }

  posts(data: any) {
    return this.http.post('https://direct-prod-directportal.godigit.com/DirectPortal/bike/variant/match/characteristics', data);
  }

  findMap() {
    let _url3: string = "https://direct-prod-directportal.godigit.com/DirectPortal/garage/locationPreferences?city=Bengaluru";
    return this.http.get(_url3);
  }
  country(){
    let _url4:string="https://direct-prod-directportal.godigit.com/DirectPortal/international/travel/countries";
    return this.http.get(_url4);
  }
}
