import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'read', component: ReadComponent },
  // { path: 'update', component: UpdateComponent },
  // { path: 'delete', component: DeleteComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
