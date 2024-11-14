import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CustomerListComponent } from './app/customer-list/customer-list.component';
import { CustomerListItemComponent } from './app/customer-list-item/customer-list-item.component';
import { ModifyListItemComponent } from './app/modify-list-item/modify-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

const routes: Routes = [
  // Default route
  {path: '', redirectTo: '/customers', pathMatch: 'full'},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/:customerID', component: CustomerListItemComponent},
  {path: 'modify-customer', component: ModifyListItemComponent},
  {path: '**', component: PageNotFoundComponent} // Wildcard route for a 404 page
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500}))
  ],
}).catch((err) => console.error(err));
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
  