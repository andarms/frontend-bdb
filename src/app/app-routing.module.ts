import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BdbListComponent } from './views/list/list.component';

const routes: Routes = [{ path: '', component: BdbListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
