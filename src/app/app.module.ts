import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './services/shared.service';
import { FormPersonaComponent } from './pages/form-persona/form-persona.component';
import { ListPersonaComponent } from './pages/list-persona/list-persona.component';
import { EditPersonaComponent } from './pages/edit-persona/edit-persona.component';
import { CabezeraComponent } from './cabezera/cabezera.component';
import { MenuComponent } from './menu/menu.component';


const firebaseConfig = {
  apiKey: "AIzaSyAqwNkP2JJ-HLTruI2LWVXtUOo7_xJ_rPs",
  authDomain: "ejemplo-fire-e8f7a.firebaseapp.com",
  projectId: "ejemplo-fire-e8f7a",
  storageBucket: "ejemplo-fire-e8f7a.appspot.com",
  messagingSenderId: "135703433467",
  appId: "1:135703433467:web:fc92a9692fe83bb266e05e"
};


@NgModule({
  declarations: [
    AppComponent,
    FormPersonaComponent,
    ListPersonaComponent,
    EditPersonaComponent,
    CabezeraComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
