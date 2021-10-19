import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NovidadesComponent } from './novidades/novidades.component';
import { SobreNosComponent } from './sobreNos/sobreNos.component';
import { FormularioComponent } from './novidades/formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [				
    AppComponent,
      HeaderComponent,
      NovidadesComponent,
      SobreNosComponent,
      FormularioComponent,
      InicioComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
