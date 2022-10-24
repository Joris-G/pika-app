import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ICreateOperation } from 'src/app/_interfaces/operation.int';
import { IProcess } from 'src/app/_interfaces/process.int';
import { OperationService } from 'src/app/_services/_process/operation.service';
import { ProcessService } from 'src/app/_services/_process/process.service';

@Component({
  selector: 'app-create-operation',
  templateUrl: './create-operation.component.html',
  styleUrls: ['./create-operation.component.scss'],
})
export class CreateOperationComponent implements OnInit {
  public operationForm: FormGroup;
  public process: IProcess;
  private activeProcess$: Observable<IProcess>;

  constructor(
    private modalCtrl: ModalController,
    private operationService: OperationService,
    private fb: FormBuilder,
    private processService: ProcessService,
  ) { }

  ngOnInit() {
    console.log('init create operation');
    this.activeProcess$ = this.processService.activeProcess$.asObservable();
    this.activeProcess$.subscribe((process) => {
      this.process = process;
      console.log(this.process);
      const order = this.process.operations.length + 1;
      this.operationForm = this.fb.group({
        name: ['', Validators.required],
        order: [order]
        // eslint-disable-next-line @typescript-eslint/naming-convention
        // ProcessId: ['', Validators.required]
      });
    });
  }

  submitOperation() {
    // TODO voir le backend pour éviter
    const order = this.operationForm.get('order').value;
    this.operationService.addOperation({
      name: this.operationForm.value.name,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ProcessId: this.process.id,
      order
    })
      .subscribe({
        next: () => {
          console.log('operation créée');
          this.modalCtrl.dismiss();
        }
      });
  }


}
