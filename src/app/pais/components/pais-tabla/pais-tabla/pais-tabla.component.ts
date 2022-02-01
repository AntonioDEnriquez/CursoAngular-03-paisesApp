import { Component, Input } from '@angular/core';
import { PorPaisComponent } from '../../../pages/por-pais/por-pais.component';
import { Country } from '../../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [`
    tr {
      /* height: 50px; */
    }
  `]
})
export class PaisTablaComponent {
  termino: string = ''

  @Input() paises: Country[] = [];

  constructor() { }


}
