import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './components/customer/customer.component';
import { LoansComponent } from './components/loans/loans.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuditLogsComponent } from './components/audit-logs/audit-logs.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashaboardComponent } from './components/dashaboard/dashaboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoansComponent,
    PaymentsComponent,
    InvoicesComponent,
    CustomersComponent,
    SettingsComponent,
    AuditLogsComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashaboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
