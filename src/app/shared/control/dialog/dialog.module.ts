import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DialogComponent } from "../dialog/dialog.component";

@NgModule({
  declarations: [DialogComponent],
  exports: [DialogComponent],
  imports: [CommonModule],
})
export class DialogModule {}
