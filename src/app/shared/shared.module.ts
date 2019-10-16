import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material";
import { RouterModule } from "@angular/router";

import * as fromPipes from "./pipes";
import * as fromComponents from "./components";
import * as fromDialogs from "./dialogs";
import { NgxHmCarouselModule } from "ngx-hm-carousel";
import { ConfirmationDialogComponent } from "./dialogs/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    NgxHmCarouselModule
  ],
  declarations: [
    ...fromPipes.pipes,
    ...fromComponents.components,
    ConfirmationDialogComponent
  ],
  entryComponents: [...fromDialogs.components],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    ...fromPipes.pipes,
    ...fromComponents.components
  ]
})
export class SharedModule {}
