import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/_interfaces/user.int';
import { AuthService } from 'src/app/_services/auth.service';
import { ILoginForm } from '../../../../_interfaces/login.int';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  private login$: Observable<IUser>;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
  ) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl()
    }) as ILoginForm;

  }

  ngOnDestroy(): void {
    this.loginForm.reset();
  }

  onSubmit(): void {
    this.login$ = this.authService.login(this.loginForm.value);
    this.login$.subscribe(
      () => {
        console.log('here');
        this.navCtrl.navigateRoot('/home');
      },
      () => {
        //TODO identifier qui de l'utilisateur ou du mot de passe est invalid
        this.loginForm.setErrors({ incorrect: true });
      });
  }

}
