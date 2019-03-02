import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoansComponent } from './loans/loans.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { ProductTableHeaderComponent } from './products/product-table-header/product-table-header.component';
import { ProductListItemsComponent } from './products/product-list-items/product-list-items.component';
import { ModalComponent } from './products/product-list-items/modal/modal.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DashboardComponent,
    LoansComponent,
    TransactionsComponent,
    ProductsComponent,
    ReportsComponent,
    ProductTableHeaderComponent,
    ProductListItemsComponent,
    ModalComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    TabsModule.forRoot(),

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
