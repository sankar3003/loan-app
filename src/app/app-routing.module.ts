import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditLogsComponent } from './components/audit-logs/audit-logs.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DashaboardComponent } from './components/dashaboard/dashaboard.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { LoansComponent } from './components/loans/loans.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path:"user",
    component:UsersComponent
  },
  {
    path:"dashboard",
    component:DashaboardComponent
  },
  {
    path:"payments",
    component:PaymentsComponent
  },
  {
    path:"settings",
    component:SettingsComponent
  },
  {
    path:"invoices",
    component:InvoicesComponent
  },
  {
    path:"customer",
    component:CustomerComponent
  },
  {
    path:"loans",
    component:LoansComponent
  },
  {
    path:"audit-logs",
    component:AuditLogsComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
{
path:"",
redirectTo:"register",
pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
