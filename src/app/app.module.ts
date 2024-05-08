import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CalculateAgePipe } from './calculate-age.pipe';
import { FilterByNamePipe } from './filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    PersonListComponent,
    CardViewComponent,
    CalculateAgePipe,
    FilterByNamePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule { }
