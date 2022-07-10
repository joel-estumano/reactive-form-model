
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class FormValidatorsAplyClass {

    public applyInvalidClass(form: FormGroup, field: string) {
        return {
            'is-invalid bg-danger bg-opacity-10': this.virifyValidTouched(form, field),
        }
    }

    public virifyValidTouched(form: FormGroup | any, field: string) {
        return !form.get(field).valid && (form.get(field).touched || form.get(field).dirty);
    }

}