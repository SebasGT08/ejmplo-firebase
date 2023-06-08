import { DataSharingService } from './../../services/data-sharing.service';
import { Persona } from './../../domain/persona.model';
import { SharedService } from 'src/app/services/shared.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.scss']
})
export class EditPersonaComponent implements OnInit {
  @Input() persona: Persona = { id: '', cedula: '', nombre: '', edad: 0 };


  constructor(
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
        this.router.navigate(['list-persona']);
      })
      .catch(error => {
        console.error("Error al actualizar la persona: ", error);
      });
  }
}
