
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Persona } from './../../domain/persona.model';


@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.scss']
})
export class FormPersonaComponent {

  persona: Persona = { id: '', cedula: '', nombre: '', edad: 0 };

  constructor(private sharedService: SharedService) { }

  agregarPersona() {
    this.sharedService.addPerson(this.persona).then(() => {
      // Limpiar el formulario después de agregar la persona
      this.persona = { id: '', cedula: '', nombre: '', edad: 0 };
    });
  }
}
