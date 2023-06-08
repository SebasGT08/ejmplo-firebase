import { Persona } from './../domain/persona.model';
// data-sharing.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../domain/producto.model';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private personaSource = new BehaviorSubject<Persona | null>(null);
  currentPersona = this.personaSource.asObservable();

  private productoSource = new BehaviorSubject<Producto | null>(null);
  currentProducto = this.productoSource.asObservable();

  constructor() { }

  changePersona(persona: Persona) {
    this.personaSource.next(persona);
  }

  changeProducto(producto: Producto) {
    this.productoSource.next(producto);
  }
}
