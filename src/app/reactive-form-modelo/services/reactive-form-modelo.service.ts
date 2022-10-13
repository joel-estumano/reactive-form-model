import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ReactiveFormModeloService {
  constructor() {}

  obterDadosEmpresa(): Observable<any> {
    return new Observable<any>((observer) => {
      let sources: any = {
        empresa: {
          nome: 'Sambli',
          cargo: 'Programador',
        },
      };
      observer.next(sources);
    });
  }
}
