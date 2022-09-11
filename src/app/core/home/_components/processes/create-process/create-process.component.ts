import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { IonModalCustomEvent } from '@ionic/core';
import { ProcessService } from 'src/app/core/_services/process.service';

@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.scss'],
})
export class CreateProcessComponent implements OnInit {
  public processForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private processService: ProcessService
  ) { }

  ngOnInit() {
    this.processForm = this.fb.group({
      article: new FormControl('', Validators.required)
    });
  }

  submitProcess() {
    this.processService.createProcess(this.processForm.value)
      .subscribe(resp => {
        if (resp) {
          // this.
        }
      });
  }

}
