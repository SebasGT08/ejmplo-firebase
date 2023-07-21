

import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../../services/shared.service';
import { Persona } from './../../domain/persona.model';

import { MatSnackBar } from '@angular/material/snack-bar';

import { PersonaService } from './../../services/persona.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';



@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.scss']
})
export class ListPersonaComponent implements OnInit {
  listadoPersonas: Persona[] | undefined;
  //contacto: Contacto = new Contacto();
   listadoPersonasWS: any;

  displayedColumns: string[] = ['cedula', 'nombre', 'edad', 'acciones'];


  constructor(private _snackBar: MatSnackBar,private sharedService: DataSharingService,private router: Router, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.obtenerPersonas().subscribe(
      (response) => {
        this.listadoPersonasWS = response;
        console.log('Listado de personas:', this.listadoPersonasWS);
      },
      (error) => {
        console.error('Error al obtener la lista de personas:', error);
      }
    );
  }


  eliminar(persona: Persona) {
    this.personaService.eliminar(persona).subscribe(
      (response) => {
        this._snackBar.open('Persona eliminada con éxito', 'Cerrar', {
          duration: 2000,
        });
        this.getPersonas();  // refrescar la lista después de la eliminación
      },
      (error) => {
        this._snackBar.open(`Error al eliminar Persona: ${error.message}`, 'Cerrar', {
          duration: 2000,
        });
      }
    );


    // if (persona.id) {
    //   this.sharedService.deletePerson(persona.id).then(() => {

    //     this._snackBar.open('Persona eliminada con éxito', 'Cerrar', {
    //       duration: 2000,
    //     });
    //     this.getPersonas();  // refrescar la lista después de la eliminación
    //   }).catch((error) => {
    //     this._snackBar.open(`Error al eliminar Persona: ${error}`, 'Cerrar', {
    //       duration: 2000,
    //     });
    //   });
    // } else {
    //   console.error('Persona.id es undefined');
    //   this._snackBar.open('Error: Persona.id es undefined', 'Cerrar', {
    //     duration: 2000,
    //   });
    // }




  }

  editar(persona: Persona) {

    this.sharedService.changePersona(persona);
    this.router.navigate(['edit-persona']);
  }
}
