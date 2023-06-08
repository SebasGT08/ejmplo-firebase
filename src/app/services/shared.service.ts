
// shared.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, deleteDoc,updateDoc,setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Persona } from './../domain/persona.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs: Firestore) { }

  getPersons(): Observable<Persona[]> {
    let personsCollection = collection(this.fs, 'personas');
    return collectionData(personsCollection, {idField: 'id'}) as Observable<Persona[]>;
  }

  addPerson(person: Persona) {
    let personsCollection = collection(this.fs, 'personas');
    return addDoc(personsCollection, person);
  }

  deletePerson(id: string) {
    let docRef = doc(this.fs, 'personas/' + id);
    return deleteDoc(docRef);
  }

  updatePerson(person: Persona) {
    let docRef = doc(this.fs, 'personas/' + person.id);
    let updatedPerson = {
      cedula: person.cedula,
      nombre: person.nombre,
      edad: person.edad
    };
    return updateDoc(docRef, updatedPerson);
  }
}
