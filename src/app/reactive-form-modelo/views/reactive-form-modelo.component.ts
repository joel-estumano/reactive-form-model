import { Component, OnInit } from '@angular/core';
import { FormValidatorsAplyClass } from 'src/app/services/form-validators-aply-class.service';
import { FormValidatorsCustom } from 'src/app/services/form-validators-custom.service';
import { ReactiveFormModeloModel } from '../models/reactive-form-modelo.model';
import { ReactiveFormModeloService } from '../services/reactive-form-modelo.service';
import { Sources } from '../sources/sources';

@Component({
  selector: 'app-reactive-form-modelo',
  templateUrl: './reactive-form-modelo.component.html',
  styleUrls: ['./reactive-form-modelo.component.scss'],
})
export class ReactiveFormModeloComponent implements OnInit {
  public reactiveFormModelo = new ReactiveFormModeloModel();
  private dadosEmpresa: any = {};
  public payload: any = {};

  constructor(
    public formValidatorsAplyClass: FormValidatorsAplyClass,
    private reactiveFormModeloService: ReactiveFormModeloService
  ) {}

  ngOnInit(): void {
    this.reactiveFormModeloService.obterDadosEmpresa().subscribe((res) => {
      this.dadosEmpresa = res;
    });
  }

  submit() {
    if (FormValidatorsCustom.isValidForms(this.reactiveFormModelo.form)) {
      this.payload = Object.assign(
        this.reactiveFormModelo.model,
        this.dadosEmpresa
      );
    } else {
      alert('form inválido!');
    }
  }

  load() {
    this.reactiveFormModelo.setValues(Sources.values);
  }

  clean() {
    this.reactiveFormModelo.setValues(null);
    this.payload = null;
  }
}
