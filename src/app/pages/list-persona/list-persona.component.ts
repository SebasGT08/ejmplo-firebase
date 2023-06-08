import { DataSharingService } from './../../services/data-sharing.service';

import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../../services/shared.service';
import { Persona } from './../../domain/persona.model';



@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.scss']
})
export class ListPersonaComponent {
  listadoPersonas: Persona[] = [];
  displayedColumns: string[] = ['cedula', 'nombre', 'edad', 'acciones'];


  constructor(private sharedService: SharedService,private router: Router, private dataSharingService: DataSharingService) { }

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
        this.getPersonas();  // refrescar la lista después de la eliminación
      });
    } else {
      console.error('Persona.id es undefined');
    }
  }

  editar(persona: Persona) {
    this.dataSharingService.changePersona(persona);
    this.router.navigate(['edit-persona']);
  }
}
