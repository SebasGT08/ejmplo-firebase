import { DataSharingService } from './../../services/data-sharing.service';

import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../../services/shared.service';
import { Persona } from './../../domain/persona.model';

import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.scss']
})
export class ListPersonaComponent implements OnInit {
  listadoPersonas: Persona[] = [];
  displayedColumns: string[] = ['cedula', 'nombre', 'edad', 'acciones'];


  constructor(private _snackBar: MatSnackBar,private sharedService: SharedService,private router: Router, private dataSharingService: DataSharingService) { }

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas() {
    this.sharedService.getPersons().subscribe(data => {
      this.listadoPersonas = data as Persona[];
    });
  }

  eliminar(persona: Persona) {

    if (persona.id) {
      this.sharedService.deletePerson(persona.id).then(() => {

        this._snackBar.open('Persona eliminada con éxito', 'Cerrar', {
          duration: 2000,
        });
        this.getPersonas();  // refrescar la lista después de la eliminación
      }).catch((error) => {
        this._snackBar.open(`Error al eliminar Persona: ${error}`, 'Cerrar', {
          duration: 2000,
        });
      });
    } else {
      console.error('Persona.id es undefined');
      this._snackBar.open('Error: Persona.id es undefined', 'Cerrar', {
        duration: 2000,
      });
    }




  }

  editar(persona: Persona) {
    this.dataSharingService.changePersona(persona);
    this.router.navigate(['edit-persona']);
  }
}
