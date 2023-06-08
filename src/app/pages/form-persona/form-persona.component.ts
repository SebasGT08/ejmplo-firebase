
import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Persona } from './../../domain/persona.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.scss']
})
export class FormPersonaComponent {

  persona: Persona = { id: '', cedula: '', nombre: '', edad: 0 };

  constructor(private router: Router,private _snackBar: MatSnackBar,private sharedService: SharedService) { }

  agregarPersona() {

    this.sharedService.addPerson(this.persona).then(() => {
      this._snackBar.open('Persona creada con éxito', 'Cerrar', {
        duration: 2000,

      });
      this.persona = { id: '', cedula: '', nombre: '', edad: 0 };
      this.router.navigate(['list-persona']);

    }).catch((error) => {
      this._snackBar.open(`Error al crear producto: ${error}`, 'Cerrar', {
        duration: 2000,
      });
    });


  }
}
