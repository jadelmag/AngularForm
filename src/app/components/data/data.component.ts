import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from './password-validation.component';
import { Observable } from 'rxjs/Observable';

declare var swal: any;

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
    styles: [`
    .ng-untouched:not(form) {
      border: 1px solid #ced4da;
    }
    button {
      margin-right: 10px;
    }
  `]
})
export class DataComponent {

  form: FormGroup;

  constructor() {

    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'lastname': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ),
      'username': new FormControl('', Validators.required, this.checkUserExist ),
      'password1': new FormControl('', [Validators.required, Validators.minLength(1) ]),
      'password2': new FormControl()
    });

    this.form.setValidators( [ Validators.required, PasswordValidation.MatchPassword ] );

    this.form.controls['username'].statusChanges.subscribe( data => {
      console.log(data);
    });
  }

  checkUserExist( control: FormControl ): Promise<any> | Observable<any> {

    const promise = new Promise( (resolve, reject) => {

      setTimeout( () => {
        if (control.value === 'iokerhe') {
          resolve( { exist: true });
        } else {
          resolve(null);
        }
      }, 2000 );

    });

    return promise;
  }

  save() {
    if (!this.form.valid) {
      swal('Form is not valid', 'There are empty required fields', 'error');
      return;
    }
    swal('Form completed successfully', 'As soon as possible will be in contact', 'success');
    this.clear();
  }

  clear() {
    this.form.reset({
      name: '',
      lastname: '',
      email: '',
      username: '',
      password1: '',
      password2: ''
    });
  }

}
