import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticationContainerComponent } from "./authentication-container/authentication-container.component";

const routes: Routes = [
  { path: "login", component: AuthenticationContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
