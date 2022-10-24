import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ITeam } from 'src/app/_interfaces/team.int';
import { IRegisterUserFormGroup } from 'src/app/_interfaces/user.int';
import { ErrorHandlingService } from 'src/app/_services/error-handling.service';
import { TeamService } from 'src/app/_services/team.service';
import { RegisterService } from '../../../../_services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  public registerForm: IRegisterUserFormGroup;
  public teams$: Observable<ITeam[]> = this.teamService.getAllTeams();

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private teamService: TeamService,
    private alertCtrl: AlertController,
    private errorHandlingService: ErrorHandlingService,
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
    const register$ = this.registerService.register(this.registerForm.value);

    register$.subscribe({
      next: async (resp) => {
        this.registerForm.reset();
        const alert = await this.alertCtrl.create({
          header: `Compte créé avec succès`,
          message: `Votre nom d'utilisateur est : ${resp.username}`,
          buttons: [{
            text: `OK`,
            handler: () => {
              this.registerService.registerSuccess$.next(true);
            }
          }]
        });
        alert.present();
      },
      error: e => {
        this.errorHandlingService.handleError(
          {
            message: `Erreur pendant l'enregistrement de l'utilisateur`,
          },
          e);
        this.registerForm.get('controlPassword').enable();
      }
    });
  }
}
