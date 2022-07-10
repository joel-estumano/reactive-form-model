import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidatorsCustom } from 'src/app/services/form-validators-custom.service';
import { ReactiveFormModeloInterface } from '../interfaces/reactive-form-modelo.interface';
const fb = new FormBuilder();

class Contato {
    telefone: string | null = null;
    email: string | null = null;
}

class Endereco {
    rua: string | null = null;
    numero: number | null = null;
    cidade: string | null = null;
}

export class ReactiveFormModeloModel implements ReactiveFormModeloInterface {
    nome: string | null = null;
    contato: Contato | null = null;
    endereco: Endereco | null = null;

    form: FormGroup = fb.group({
        nome: [this.nome, [Validators.required]],
        telefone: [this.contato?.telefone, [Validators.required]],
        email: [this.contato?.email, [Validators.required, Validators.email]],
        rua: [this.endereco?.rua, [Validators.required]],
        numero: [
            this.endereco?.numero,
            [Validators.required, Validators.maxLength(4)],
        ],
        cidade: [this.endereco?.cidade, [Validators.required]],
    });

    get model(): ReactiveFormModeloInterface {
        return {
            nome: this.form.value.nome,
            contato: {
                telefone: this.form.value.telefone,
                email: this.form.value.email,
            },
            endereco: {
                rua: this.form.value.rua,
                numero: this.form.value.numero,
                cidade: this.form.value.cidade,
            },
        };
    }

    setValues(values: ReactiveFormModeloInterface | null) {
        if (values) {
            this.form.controls['nome'].setValue(values.nome);
            this.form.controls['telefone'].setValue(values.contato?.telefone);
            this.form.controls['email'].setValue(values.contato?.email);
            this.form.controls['rua'].setValue(values.endereco?.rua);
            this.form.controls['numero'].setValue(values.endereco?.numero);
            this.form.controls['cidade'].setValue(values.endereco?.cidade);
            FormValidatorsCustom.isValidForms(this.form);
        } else {
            this.form.reset();
        }
    }
}
