import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component/home.component';
import { MXrealityPage } from './projectpages/mxreality-page/mxreality-page';
import { SoulSurvivorPage } from './projectpages/soul-survivor-page/soul-survivor-page';
import { SindriaKnightsPage } from './projectpages/sindria-knights-page/sindria-knights-page';
import { ZombieShooterPage } from './projectpages/zombie-shooter-page/zombie-shooter-page';
import { BustersafePage } from './projectpages/bustersafe-page/bustersafe-page';
import { Aboutme } from './aboutme/aboutme';
import { Contactpage } from './contactpage/contactpage';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'mxreality', component: MXrealityPage},
    {path:'soulsurvivor', component: SoulSurvivorPage},
    {path:'sindriaknights', component: SindriaKnightsPage},
    {path:'zombieshooter', component: ZombieShooterPage},
    {path:'bustersafe', component: BustersafePage},
    {path:'aboutme', component: Aboutme},
    {path:'contactpage', component: Contactpage},
    {path: '**', component: HomeComponent,pathMatch: 'full'}
];
