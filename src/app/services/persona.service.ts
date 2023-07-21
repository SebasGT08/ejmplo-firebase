
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../domain/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }
  save(persona: Persona){
    return this.http.post<any>("http://localhost:8080/Practica_web/rs/clientes/", persona)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/Practica_web/rs/clientes/clientesListar/")
  }

  public obtenerPersonas(){
    let url = "http://localhost:8080/Practica_web/rs/clientes/clientesListar/";
    return this.http.get<any>(url);
  }

  eliminar(persona: Persona){
    return this.http.delete<any>("http://localhost:8080/Practica_web/rs/clientes/", { body: persona });
  }

  actualizar(persona: Persona){
    return this.http.put<any>("http://localhost:8080/Practica_web/rs/clientes/", persona);
  }


}
