import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { RegistrationComponent } from './registration/registration.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ListUserComponent } from './list-user/list-user.component';
import { CommentsComponent } from './comments/comments.component';
import { MypipePipe } from './shared/pipes/mypipe.pipe';
import { FormsModule } from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { AdminCommentComponent } from './admin-comment/admin-comment.component';
import { ChartsModule } from "ng2-charts";
import { OldDeleteComponent } from './old-delete/old-delete.component';
import { RouteGuard } from './route.guard';
import { RouteErrorHandler } from './route-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,

    ListComponent,
    ViewComponent,

    AddComponent,

    RegistrationComponent,

    AuthorizationComponent,

    FavouriteComponent,

    AddRoleComponent,

    ListUserComponent,

    CommentsComponent,

    MypipePipe,

    AdminComponent,

    AdminCommentComponent,

    OldDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFileUploaderModule,
    ChartsModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: RouteErrorHandler,
    },
    RouteGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
