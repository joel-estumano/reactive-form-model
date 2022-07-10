import { Component, OnInit } from '@angular/core';
import { FormValidatorsAplyClass } from 'src/app/services/form-validators-aply-class.service';
import { FormValidatorsCustom } from 'src/app/services/form-validators-custom.service';
import { ReactiveFormModeloModel } from '../models/reactive-form-modelo.model';
import { Sources } from '../sources/sources';

@Component({
  selector: 'app-reactive-form-modelo',
  templateUrl: './reactive-form-modelo.component.html',
  styleUrls: ['./reactive-form-modelo.component.scss'],
})
export class ReactiveFormModeloComponent implements OnInit {
  public reactiveFormModelo = new ReactiveFormModeloModel();

  constructor(public formValidatorsAplyClass: FormValidatorsAplyClass) { }

  ngOnInit(): void { }

  submit() {
    if (FormValidatorsCustom.isValidForms(this.reactiveFormModelo.form)) {
      // console.log('model: ', this.reactiveFormModelo.model);
    } else {
      alert('form inválido!');
    }
  }

  load() {
    this.reactiveFormModelo.setValues(Sources.values);
  }

  clean() {
    this.reactiveFormModelo.setValues(null);
  }
}
