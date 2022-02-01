import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  //Emitir el termino al por-pais-components
  // A los eventos se les pone la pala on para simular que es un evento
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // onDebounce se va a emitir cuando la persona deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // Recibe de por capita y por pais
  @Input() placeholder: string = ''


  // El subject es un observable
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  // El oninit se dispara una unica vez cuando el componente es iniciado
  ngOnInit() {
    this.debouncer.pipe(
      // cuantas milesimas de segundo antes de emitir el siguiente valor
      debounceTime(300))
      .subscribe(valor => {
        // emitimos el valor
        this.onDebounce.emit(valor)
      });
  }

  buscar() {
    // Emite el termino hacia por-pais.component
    this.onEnter.emit(this.termino)

  }
  teclaPrecionada() {
    // .next es para emitir el siguiente valor
    this.debouncer.next(this.termino)

  }



}
