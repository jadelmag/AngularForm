import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var swal: any;

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-untouched:not(form) {
      border: 1px solid #ced4da;
    }
    button {
      margin-right: 10px;
    }
  `]
})
export class TemplateComponent {

  user: User = {
    name: null,
    lastName: null,
    email: null,
    country: '',
    gender: 'Male',
    accept: false
  };

  countries = [{
    code: 'CRI',
    name: 'Costa Rica'
  },
  {
    code: 'ESP',
    name: 'España'
  }];

  genders: string[] = ['Male', 'Female'];

  constructor() { }

  save( form: NgForm ) {
    swal('Form completed successfully', 'As soon as possible will be in contact', 'success');
    // console.log('ngForm: ', form);
    // console.log('value: ', form.value);
  }


}

class User {
  name: string;
  lastName: string;
  email: string;
  country: string;
  gender: string;
  accept: boolean;

  constructor() {}
}
