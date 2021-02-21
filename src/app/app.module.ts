import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BdcInputComponent } from './components/input/input.component';
import { TableComponent } from './components/table/table.component';
import { GenderPipe } from './pipes/gender.pipe';
import { BdbCreateComponent } from './views/create/create.component';
import { BdbDetailsComponent } from './views/details/details.component';
import { BdbListComponent } from './views/list/list.component';

@NgModule({
  declarations: [AppComponent, BdbListComponent, TableComponent, BdbDetailsComponent, GenderPipe, BdbCreateComponent, BdcInputComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: 'BACKEND_URL', useValue: environment.backendUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
