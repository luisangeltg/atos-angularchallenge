import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './components/shared/error404-page/error404-page.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '404', component: Error404PageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
