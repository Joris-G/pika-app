import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ITeam } from '../../_interfaces/team.int';
import { IRegisterUserFormGroup } from '../../_interfaces/user.int';
import { TeamService } from '../../_services/team.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers: [
    RegisterService,
  ]
})
export class RegisterFormComponent implements OnInit {
  public registerForm: IRegisterUserFormGroup;
  public teams$: Observable<ITeam[]> = this.teamService.getAllTeams();
  private register$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private teamService: TeamService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      controlPassword: new FormControl('', Validators.required),
      teamId: new FormControl<number>(null),
    }) as IRegisterUserFormGroup;
  }
  onSubmit(): void {
    this.registerForm.get('controlPassword').disable();
    this.registerService.register(this.registerForm.value)
      .subscribe(
        () => {
          this.navCtrl.navigateRoot('login');
        },
        () => {
          this.registerForm.get('controlPassword').enable();
        });
  }
}
