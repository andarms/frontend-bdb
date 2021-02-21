import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { BdbListComponent } from './views/list/list.component';

@NgModule({
  declarations: [AppComponent, BdbListComponent, TableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: 'BACKEND_URL', useValue: environment.backendUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
