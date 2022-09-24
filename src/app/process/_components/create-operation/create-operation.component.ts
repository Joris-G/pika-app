import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { OperationService } from '../../_services/operation.service';

@Component({
  selector: 'app-create-operation',
  templateUrl: './create-operation.component.html',
  styleUrls: ['./create-operation.component.scss'],
})
export class CreateOperationComponent implements OnInit {
  public operationForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private operationService: OperationService,
    private fb: FormBuilder,
  ) {
    this.operationForm = this.fb.group({
      name: ['', Validators.required],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      // ProcessId: ['', Validators.required]
    });
  }

  ngOnInit() {

  }
  submitOperation() {
    // TODO voir le backend pour éviter
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.operationService.addOperation({ name: this.operationForm.value.name, ProcessId: 1 })
      .subscribe({
        next: () => {
          console.log('operation créée');
          this.modalCtrl.dismiss();
        }
      });
  }


}
