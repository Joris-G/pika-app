import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { ProcessService } from '../../_services/process.service';

@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.scss'],
})
export class CreateProcessComponent implements OnInit {
  public processForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private processService: ProcessService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
  ) {
  }

  ngOnInit() {
    this.processForm = this.fb.group({
      article: new FormControl('', Validators.required)
    });
  }

  submitProcess() {
    this.processService.createProcess(this.processForm.value)
      .subscribe({
        next: resp => {
          this.modalCtrl.dismiss();
        },
        error: (err) => this.alertCtrl.create({ header: `Erreur : ${err.status}`, message: `Le process n'a pas été créé` })
      });
  }

}
