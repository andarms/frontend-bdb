import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BdbAdoptComponent } from './views/adopt/adopt.component';
import { BdbCreateComponent } from './views/create/create.component';
import { BdbDetailsComponent } from './views/details/details.component';
import { BdbListComponent } from './views/list/list.component';

const routes: Routes = [
  { path: '', component: BdbListComponent },
  { path: 'persons/create', component: BdbCreateComponent },
  { path: 'persons/adopt', component: BdbAdoptComponent },
  { path: 'persons/:id', component: BdbDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
