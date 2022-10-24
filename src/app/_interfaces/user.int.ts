import { AbstractControl, FormGroup } from '@angular/forms';

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  userUpdatedBy: IUser;

};

export interface IRegisterUser {
  teamId?: number;
  firstname: string;
  lastname: string;
  password: string;
  username?: string;
};

export interface IRegisterUserFormGroup extends FormGroup {
  value: IRegisterUser;
  controls: {
    password: AbstractControl;
    firstname: AbstractControl;
    lastname: AbstractControl;
    teamId?: AbstractControl;
  };
}
