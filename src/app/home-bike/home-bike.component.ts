import { Component, OnInit } from '@angular/core';
import { AutocompleteServiceService } from '../autocomplete-service.service';


@Component({
  selector: 'app-home-bike',
  templateUrl: './home-bike.component.html',
  styleUrls: ['./home-bike.component.css']
})
export class HomeBikeComponent {

  bikes: string[] = [];

  post_new: string[] = [];

  post_code: any[] = [];

  dropDownValues: any[] = [];

  vehicle: any[] = [];

  vehicle_code: any;

  search: boolean;
  delete: boolean;
  gif: boolean;

  constructor(private callService: AutocompleteServiceService) {
    this.search = true;
    this.delete = false;
    this.gif = false;
  }

  bikebrand(e: any) {
    let Value = e;
    this.callService.callBike(Value).subscribe(data => {
      let responce2 = data.json();
      this.bikes = [];
      this.bikes = responce2;
      this.dropDownValues = [];
      this.bikes.forEach(ele => {
        this.dropDownValues.push(ele.concat);
      });
    });

    if (this.dropDownValues.length === 0) {
      (document.getElementById("city") as HTMLInputElement).value = '';
    }
  }

  selectBrand(e: any) {
    let a = (document.getElementById("varient") as HTMLInputElement).value;
    if (a !== '') {
      (document.getElementById("varient") as HTMLInputElement).value = '';
    }

    let selectedBike: any;
    this.bikes.forEach(ele => {
      if (ele.concat === e.value) {
        selectedBike = ele;
      }
    });
    const reqData = {
      make: selectedBike.make,
      model: selectedBike.model
    }

    this.callService.posts(reqData).subscribe(data => {
      let post = data.json();
      post = JSON.parse(post);
      
      for (let i = 0; i <= post.length - 1; i++) {
        this.vehicle.push(post[i]);
      }

      this.post_new = [];
      this.post_code = [];
      document.getElementById("varient").focus();
      for (let data of post) {
        for (let key in data) {
          if (key == 'new') {
            this.post_new.push(data[key]);
          }
        }
      }
    });
  }

  vehicleCode(e2: any) {
    let selectedBike2: any;
    this.vehicle.forEach(ele => {
      if (ele.new === e2.value) {
        selectedBike2 = ele;
        this.vehicle_code = selectedBike2['VEHICLE CODE'];
      }
    });
  }

  deleteInputs() {
    (document.getElementById("city") as HTMLInputElement).value = '';
  }

  deleteInput() {
    (document.getElementById("varient") as HTMLInputElement).value = '';
  }

  autoFocusOnfirstInput() {
    let a = (document.getElementById("city") as HTMLInputElement).value;
    let b = (document.getElementById("city") as HTMLInputElement).value;
    if (a == '') {
      document.getElementById("city").focus();
      this.post_new = [];
    }
    if (b !== '') {
      (document.getElementById("varient") as HTMLInputElement).value = '';
    }
  }

  onSubmit() {
    alert("submitted");
    window.location.reload();
  }

  deleted() {
    let a = (document.getElementById("city") as HTMLInputElement).value;
    if (a != '') {
      this.delete = true;
      this.search = false;
    } else {
      this.search = true;
      this.delete = false;
    }
  }
  changetxt() {
    let a = setInterval(() => {
      (document.getElementById("btn") as HTMLInputElement).value = '';
      this.gif = true;
    }, 100);
    setTimeout(() => {
      clearInterval(a);
      this.gif = false;
      (document.getElementById("btn") as HTMLInputElement).value = "Get Quote";
    }, 2000);
  }
}

