import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubOperationService } from 'src/app/_services/_process/sub-operation.service';
import { ICreateSubOperation } from '../../../../_interfaces/suboperation.int';

@Component({
  selector: 'app-create-sub-operation',
  templateUrl: './create-sub-operation.component.html',
  styleUrls: ['./create-sub-operation.component.scss'],
})
export class CreateSubOperationComponent implements OnInit {
  public subOpeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private subOperationService: SubOperationService,
  ) {
    this.subOpeForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() { }
  submitSubOpeForm() {
    const subOpe: ICreateSubOperation = {
      name: this.subOpeForm.value.name,
      // TODO voir côté backend pour éviter
      // eslint-disable-next-line @typescript-eslint/naming-convention
      OperationId: 1,
    };
    this.subOperationService.addSubOpe(subOpe).subscribe({
      next: () => {
        console.log('sub operation créée');
      }
    });
  }
}
