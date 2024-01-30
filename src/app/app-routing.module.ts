import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {
    path:'' , redirectTo:'inicio',pathMatch:'full'
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  { path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'tienda',
    component:TiendaComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
