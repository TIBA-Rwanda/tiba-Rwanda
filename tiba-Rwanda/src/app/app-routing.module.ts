import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent} from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { DatasetsComponent } from './datasets/datasets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnersComponent } from './partners/partners.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'datasets', component: DatasetsComponent},
  {path: 'dashboards', component: DashboardComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'publications', component: PublicationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
