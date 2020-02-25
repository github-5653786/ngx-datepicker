import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // form: FormGroup;

  // constructor(private fb: FormBuilder) { }

  // ngOnInit() {
  //   this.form = this.fb.group({
  //     username: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
  //     password: ['', [Validators.required, Validators.maxLength(15)]]
  //   })
  // }
  // login() {
  //   console.log(this.form.value);
  //   this.form.reset();
  // }

  //another example

  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  showIcon: boolean;
  showIcons: boolean;
  constructor(){
    this.showIcon = false;
    this.showIcons = true;
  }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }
  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }
  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      this.myform.reset();
    }
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
