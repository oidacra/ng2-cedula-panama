import { CedulaValidators } from 'projects/ng2-cedula-panama/src/public-api';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples-reactive',
  templateUrl: './examples-reactive.component.html',
  styleUrls: ['./examples-reactive.component.scss'],
})
export class ExamplesReactiveComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cedula: [, [CedulaValidators.verificar, Validators.required]],
      email: [, [Validators.email, Validators.required]],
    });
  }
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get cedula(): FormControl {
    return this.form.get('cedula') as FormControl;
  }
  submit() {
    console.log(this.form.valid);
  }

  ngOnInit(): void {}
}
