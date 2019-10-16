import { NgModule } from "@angular/core";
import { AuthenticationContainerComponent } from "./authentication-container/authentication-container.component";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SharedModule } from "../shared";
import { services } from "./services";

@NgModule({
  declarations: [AuthenticationContainerComponent],
  imports: [SharedModule, AuthenticationRoutingModule],
  providers: [...services]
})
export class AuthenticationModule {}
