import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCommentComponent } from './admin-comment/admin-comment.component';
import { OldDeleteComponent } from './old-delete/old-delete.component';
import { RouteGuard } from './route.guard';


const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "favour", component: FavouriteComponent },
  {
    path: "registration",
    component: RegistrationComponent,
    canActivate: [RouteGuard],
  },
  {
    path: "login",
    component: AuthorizationComponent,
    canActivate: [RouteGuard],
  },
  { path: "add", component: AddComponent, canActivate: [RouteGuard] },
  { path: "products/:id", component: ViewComponent },
  { path: "add-role", component: AddRoleComponent, canActivate: [RouteGuard] },
  {
    path: "list-user",
    component: ListUserComponent,
    canActivate: [RouteGuard],
  },
  { path: "dashboard", component: AdminComponent, canActivate: [RouteGuard] },
  {
    path: "admin-comment",
    component: AdminCommentComponent,
    canActivate: [RouteGuard],
  },
  { path: "archive", component: OldDeleteComponent, canActivate: [RouteGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteGuard],
})
export class AppRoutingModule {}
