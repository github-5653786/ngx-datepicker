import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  showIcon: boolean;
  showIcons: boolean;
  constructor(){
    this.showIcon = false;
    this.showIcons = true;
  }
  onSubmit() {
    window.location.reload();
  }

  iconHide() {
    let a = (document.getElementById("Password") as HTMLInputElement);
    if (a.type === 'password') {
      a.type = 'text';
      this.showIcon = true;
      this.showIcons = false;

    } else {
      a.type = 'password';
      this.showIcon = false;
      this.showIcons = true;

    }
  }
}
