import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NovidadesComponent } from './novidades/novidades.component';
import { SobreNosComponent } from './sobreNos/sobreNos.component';

const routes: Routes = [
  { path: 'Novidades', component: NovidadesComponent },
  { path: 'Sobre', component: SobreNosComponent},
  { path: 'Inicio', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
