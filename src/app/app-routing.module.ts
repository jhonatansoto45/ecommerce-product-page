import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'e-commerce',
    loadChildren: () =>
      import('./e-commerce/e-commerce.module').then((m) => m.ECommerceModule),
  },
  {
    path: '**',
    redirectTo: 'e-commerce',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
