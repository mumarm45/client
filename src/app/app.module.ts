import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardsComponent } from './cards/cards.component';
import { ErrorComponent } from './error/error.component';
import { RecoverpwComponent } from './recoverpw/recoverpw.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { from } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    CalendarComponent,
    CardsComponent,
    ErrorComponent,
    RecoverpwComponent,
    RegisterComponent,
    LoginComponent,
    TableComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
