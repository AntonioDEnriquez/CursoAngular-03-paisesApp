import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  // pais puede ser null pero tratalo como si siempre tuviera data con !
  pais!: Country[];

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit() {

    this.activatedRoute.params
      // podemos especificar los operadores que van a trabajar con el producto de este observable
      // el switchmap es uno de los operadores de informacion muy interesantes de rxjs, te permite resivir un observable y regresar otro observable
      .pipe(switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        // tap es un operador que dispara un efecto seundario
        tap(console.log)
      ).subscribe(pais => this.pais = pais);

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.paisService.getPaisPorAlpha(id).subscribe(pais => {
    //     console.log(pais);
    //   });
    // });
  }

}
