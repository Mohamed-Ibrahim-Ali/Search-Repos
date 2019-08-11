import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalsComponent } from './components/detals/detals.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'details' , component: DetalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
