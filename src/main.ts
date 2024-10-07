import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CustomerListComponent } from './app/customer-list/customer-list.component';
import { CustomerListItemComponent } from './app/customer-list-item/customer-list-item.component';

const routes: Routes = [
  // Default route
  {path: '', redirectTo: '/customers', pathMatch: 'full'},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/:id', component: CustomerListItemComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
