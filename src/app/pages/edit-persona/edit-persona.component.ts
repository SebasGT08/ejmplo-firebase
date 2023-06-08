import { DataSharingService } from './../../services/data-sharing.service';
import { Persona } from './../../domain/persona.model';
import { SharedService } from 'src/app/services/shared.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.scss']
})
export class EditPersonaComponent implements OnInit {
  @Input() persona: Persona = { id: '', cedula: '', nombre: '', edad: 0 };


  constructor(
    private _snackBar: MatSnackBar,
    private sharedService: SharedService,
    private dataSharingService: DataSharingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSharingService.currentPersona.subscribe(persona => {
      if(persona){
        this.persona = persona;
      }
    });
  }

  actualizarPersona() {

      this.sharedService.updatePerson(this.persona)
      .then(() => {

        this._snackBar.open('Persona actualizada con éxito', 'Cerrar', {
          duration: 2000,
        });
        this.router.navigate(['list-persona']);
      })
      .catch(error => {
        console.error("Error al actualizar la persona: ", error);
        this._snackBar.open(`Error al actualizar persona: ${error}`, 'Cerrar', {
          duration: 2000,
        });
      });





  }
}
