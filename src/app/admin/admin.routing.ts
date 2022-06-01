import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminEditProductComponent } from "./admin-product/admin-edit-product/admin-edit-product.component";
import { AdminNewProductComponent } from "./admin-product/admin-new-product/admin-new-product.component";
import { AdminProductComponent } from "./admin-product/admin-product.component";
import { AdminComponent } from "./admin.component";

const admin_routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: AdminHomeComponent },
    { path: 'product/edit/:id', component: AdminEditProductComponent},
    { path: 'product/new', component: AdminNewProductComponent},
    { path: 'product/:id', component: AdminProductComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(admin_routes)],
  exports: [RouterModule]
}) export class AdminRouting {}