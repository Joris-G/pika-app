import { AbstractControl, FormGroup } from '@angular/forms';

export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginForm extends FormGroup {
  value: ILogin;
  // We need to add these manually again, same fields as IUser
  controls: {
    password: AbstractControl;
    username: AbstractControl;
  };
}
