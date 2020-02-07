import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './components/persona/persona.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ContactoComponent } from './components/contacto/contacto.component';




const APP_ROUTES: Routes = [

    {path: 'persona', component: PersonaComponent },
    {path: 'mapa', component: MapaComponent },
    {path: 'contacto', component: ContactoComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'persona'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});