import {AbstractControl} from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       const password = AC.get('password1').value;
       const confirmPassword = AC.get('password2').value;
        if (password !== confirmPassword) {
            AC.get('password2').setErrors( {MatchPassword: true} );
        } else {
            return null;
        }
    }
}
