import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';




const routes: Routes = [

    // Definimos rutas
    {
        // Este es el primer componente que quiero mostrar cuando alguien entre a la app
        path: '',
        component: PorPaisComponent,
        // cuando estemos en ningun lugar de la url que caiga en este lugar
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        // path: 'pais/algo'
        // para que sea dinamico, para tomar un argumento necesitamos poner pais/:algo
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        // Excepcion en caso de que no ingresen una ruta correcta mandara a la pagina principal
        path: '**',
        redirectTo: ''
    }

];


@NgModule({
    imports: [
        // es el que va a hacer la configuracion propia de mis rutas, foRoot son las rutas principales, forChild para las rutas hijas
        RouterModule.forRoot(routes)
    ],
    exports: [
        // Exportamos para utilizarlo fuera
        RouterModule
    ]
})

export class AppRoutingModule { }