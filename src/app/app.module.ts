import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BdbInputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { BdbTableComponent } from './components/table/table.component';
import { BdbGenderPipe } from './pipes/gender.pipe';
import { BdbAdoptComponent } from './views/adopt/adopt.component';
import { BdbCreateComponent } from './views/create/create.component';
import { BdbDetailsComponent } from './views/details/details.component';
import { BdbListComponent } from './views/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    BdbListComponent,
    BdbTableComponent,
    BdbDetailsComponent,
    BdbGenderPipe,
    BdbCreateComponent,
    BdbInputComponent,
    SelectComponent,
    BdbAdoptComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [{ provide: 'BACKEND_URL', useValue: environment.backendUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
