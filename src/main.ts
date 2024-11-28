import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { CustomerListComponent } from './app/customer-list/customer-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [
  // Default route
  {path: '', redirectTo: '/customers', pathMatch: 'full'}, // Default route
  {path: 'customers', component: CustomerListComponent},  //eagrly loaded
  // Lazy loaded
  {path: 'customers/:customerID', loadComponent: () => 
    import('./app/customer-list-item/customer-list-item.component').then(m => m.CustomerListItemComponent)},
  {path: 'modify-customer', loadComponent: () => 
    import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  {path: '**', loadComponent: () => 
    import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100})),
    provideAnimationsAsync(), // Import providers dynamically
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
}).catch((err) => console.error(err));
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
  