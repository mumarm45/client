import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverpwComponent } from './recoverpw/recoverpw.component';
import { ErrorComponent } from './error/error.component';




const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
 
  {path: 'login' , component:LoginComponent},
  {path: 'form', component:FormsComponent},
  {path: 'card' , component:CardsComponent},
  {path: 'Data Table' , component:TableComponent},
  {path: 'calendar' , component:CalendarComponent},
  {path: 'register' , component:RegisterComponent},
  {path: 'recoverpw' , component:RecoverpwComponent},
  {path: 'error' , component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
