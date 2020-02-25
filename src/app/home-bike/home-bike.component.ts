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

  constructor(private callService: AutocompleteServiceService) { }

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
  deleteInputs2() {
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
  onBlur() {
    document.getElementById("show").style.display = "block";
    document.getElementById("hide").style.display = "none";
  }
  onBlur2() {
    document.getElementById("show2").style.display = "block";
    document.getElementById("hide2").style.display = "none";
  }
  hide() {
    setTimeout(function () {
      document.getElementById("show").style.display = "none";
      document.getElementById("hide").style.display = "block";
    }, 100);
  }
  hide2() {
    setTimeout(function () {
      document.getElementById("show2").style.display = "none";
      document.getElementById("hide2").style.display = "block";
    }, 100);
  }
  onSubmit() {
    alert("submitted");
  }





}

